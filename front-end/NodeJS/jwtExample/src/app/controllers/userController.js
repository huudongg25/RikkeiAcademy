const User = require('../models/User.model')
const jwt = require('jsonwebtoken')
const sceretKey = require('../../configs/jwt.config')
var bcrypt = require('bcryptjs');

class UserController {
    async handleRegister(req, res) {
        // get username vs password ở body
        const { username, password } = req.body;
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
                if(myPass) {
                    const accessToken = jwt.sign(user.dataValues, sceretKey)
                    res.status(200).json({
                        data: user,
                        accessToken
                    })
                    // Sai pass thì trả lỗi sai password
                } else {
                    res.status(401).json({msg:"Password Wrong"})
                }
            } else {
                // Nếu sai thì báo lỗi
                res.status(401).json({ msg: "Username dont exist" });
            }
        } catch (error) {
            res.status(404).json({ msg: "not found" })
        }
    }

    async handleGetUser(req, res) {
        try {
            const userAll = await User.findAll()
            res.status(200).json({ data: userAll })
        } catch (error) {
            res.status(500).json({ msg: "Server loi" })
        }
    }
}

module.exports = new UserController()