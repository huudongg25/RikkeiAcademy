const User = require('../models/User.model')
const jwt = require('jsonwebtoken')
const sceret = require('../../configs/jwt.config');
const bcrypt = require('bcryptjs/dist/bcrypt');
let refreshTokenArr = []
class UserController {
    async handleRegister(req, res) {
        // get username vs password ở body
        const { username, password } = req.body;
        console.log(req.body);
        try {
            //kiểm tra username đã tồn tại chưa
            const userName = await User.findOne({ where: { username } });

            // nếu mà tồn tại username thì báo lỗi
            if (userName) {
                return res.status(400).json({ msg: 'Username already exists' });
            }
            // trường hợp k tồn tại username
            const saltRounds = 10; //độ an toàn mã hóa của password
            const salt = await bcrypt.genSalt(saltRounds);
            const hashedPassword = await bcrypt.hash(password, salt); // Mã hóa password
            const user = await User.create({ ...req.body, password: hashedPassword }); // Insert dữ liệu, password = password mới mã hóa

            res.status(200).json({ msg: 'Register Successfully' });
        } catch (error) {
            // lỗi server
            console.error('Error handling register:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async handleLogin(req, res) {
        // get username vs password ở body
        const { username, password } = req.body;
        try {
            // Kiểm tra username và trả về toàn bộ data
            const user = await User.findOne({ where: { username } })
            // Nếu có user thì so sánh password bằng hàm compare
            if (user) {
                // Kiểm tra password nhập vào vs password query từ trong DB
                const myPass = await bcrypt.compare(password, user.dataValues.password)
                // Thêm điều kiện nếu có thì mới thành công và trả dữ liệu
                if (myPass) {
                    const accessToken = jwt.sign(user.dataValues, sceret.sceretKey, { expiresIn: "60s" }) // Token hết hạn trong vòng 30s , vd thêm : 30d ,30m
                    const refreshToken = jwt.sign(user.dataValues, sceret.sceretKeyRefresh, { expiresIn: "365d" }) // Tạo refreshToken để dự trữ
                    refreshTokenArr.push(refreshToken) // push refresh token vào 1 mảng để lưu trữ
                    const { password, ...data } = user.dataValues //loại bỏ password ra khỏi phần data trả về frontend,destructuring
                    res.cookie("refreshToken", refreshToken, { //Lưu refreshToken vào cookie khi đăng nhập thành công
                        httpOnly: true,
                        secure: true,
                        sameSite: "strict"
                    })
                    return res.status(200).json({
                        data,
                        accessToken
                    })
                    // Sai pass thì trả lỗi sai password
                } else {
                    return res.status(401).json({ msg: "Password Wrong" })
                }
            } else {
                // Nếu sai thì báo lỗi
                return res.status(401).json({ msg: "Username dont exist" });
            }
        } catch (error) {
            return res.status(404).json({ msg: "not found" })
        }
    }

    async refreshToken(req, res) {
        const refreshToken = req.cookies.refreshToken //Lưu ý nhớ cài đặt cookie-parser
        if (!refreshToken) return res.status(401).json("Unauthenticated")
        if (!refreshTokenArr.includes(refreshToken)) {
            return res.status(401).json("Unauthenticated")
        }
        jwt.verify(refreshToken, sceret.sceretKeyRefresh, (err, user) => {
            if (err) {
                return res.status(400).json("refreshToken is not valid")
            }
            const { iat, exp, ...userOther } = user
            console.log(user);
            refreshTokenArr = refreshTokenArr.filter(token => token !== refreshToken) //lọc ra những thằng cũ
            //nếu đúng thì nó sẽ tạo accessToken mới và cả refreshToken mới
            const newAccessToken = jwt.sign(userOther, sceret.sceretKey, { expiresIn: "60s" })
            const newRefreshToken = jwt.sign(userOther, sceret.sceretKeyRefresh, { expiresIn: "365d" })
            refreshTokenArr.push(newRefreshToken)
            res.cookie("refreshToken", newRefreshToken, { //Lưu NewrefreshToken vào cookie khi reset thành công 
                httpOnly: true,
                secure: true,
                sameSite: "strict"
            })
            res.status(200).json({ accessToken: newAccessToken })
        })
    }

    async logout(req, res) {
        res.clearCookie("refreshToken")
        refreshTokenArr = refreshTokenArr.filter(token => token !== req.cookies.refreshToken)
        return res.status(200).json("Logout successfully")
    }

    async handleGetUser(req, res) {
        try {
            const userAll = await User.findAll()
            return res.status(200).json({ data: userAll })
        } catch (error) {
            return res.status(500).json({ msg: "Server loi" })
        }
    }
}

module.exports = new UserController()
