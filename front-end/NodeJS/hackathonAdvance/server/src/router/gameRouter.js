const express = require('express')
const path = require('path')
const fs = require('fs')
const router = express.Router()

const dbPath = path.join(__dirname, "../public/database.json")

// thêm mới lượt chơi
router.post('/', (req, res) => {
    let dataBody = req.body
    let dataConvert = Object.values(dataBody)
    dataConvert = dataConvert.map((item, index) => {
        return {
            idPlayer: index + 1,
            name: item,
            rounds: []
        }
    })
    fs.readFile(dbPath, (err, data) => {
        if (err) {
            res.status(400).json({ msg: "error" })
        } else {
            let dataJson = JSON.parse(data);
            let dataMain = dataJson[0].game
            let newId = Number(dataMain[dataMain.length - 1].id) + 1
            let newGame = {
                id: newId,
                players: dataConvert
            }
            dataMain.push(newGame)
            dataJson[0].game = dataMain
            fs.writeFile(dbPath, JSON.stringify(dataJson), (err) => {
                if (err) {
                    res.status(400).json({ msg: "Error" })
                } else {
                    res.status(200).json({ msg: "Success" })
                }
            })
        }
    })
})

// get về danh sách chơi
router.get("/", (req, res) => {
    fs.readFile(dbPath, (err, data) => {
        if (err) {
            res.status(400).json({ msg: 'Error' })
        } else {
            let dataJson = JSON.parse(data)
            dataJson = dataJson[0].game
            res.status(200).json(dataJson)
        }
    })
})

// tạo rounds chơi
router.post('/add-rounds/:id', (req, res) => {
    let idGame = Number(req.params.id)
    console.log(idGame);
    fs.readFile(dbPath, (err, data) => {
        if (err) {
            res.status(400).json({ msg: 'Error' })
        } else {
            let dataMain = JSON.parse(data)
            let newRoundUpdate = dataMain[0].game
            newRoundUpdate?.map((item) => {
                // Tìm tới thằng id của game nào, rồi vào add từng round cho người chơi game đó
                // khởi đầu thì mỗi round có id và score : 0
                if (item.id == idGame) {
                    item?.players.map((item) => {
                        let itemRounds = item.rounds
                        let newIdRound = itemRounds.length > 0 ? itemRounds[itemRounds.length - 1]?.idRound + 1 : 1
                        let dataNewRounds = {
                            idRound: newIdRound,
                            score: 0
                        }
                        item.rounds.push(dataNewRounds)
                    })
                }
            })
            dataMain[0].game = newRoundUpdate
            fs.writeFile(dbPath, JSON.stringify(dataMain), (err) => {
                if (err) {
                    res.status(400).json({ msg: "Error" })
                } else {
                    res.status(200).json({ msg: "Success" })
                }
            })
        }
    })
})


// Api tăng  điểm người chơi
router.patch("/up-point/:id", (req, res) => {
    let idGame = Number(req.params.id)
    let idPlayer = Number(req.body.idPlayer)
    let idRound = Number(req.body.idRound)
    console.log("game", idGame);
    console.log("player", idPlayer);
    console.log("round", idRound);
    fs.readFile(dbPath, (err, data) => {
        if (err) {
            res.status(400).json({ msg: "Error" })
        } else {
            let dataMain = JSON.parse(data)
            let dataUpdate = dataMain[0].game
            // lặp qua từng game và kiểm tra id của game nào thay đổi
            dataUpdate.map(item => {
                if (item.id == idGame) {
                    // có được game thay đổi,tiếp tục lặp qua kiểm tra xem player nào đang thay đổi
                    item?.players.map(item => {
                        if (item?.idPlayer == idPlayer) {
                            // có được player nào đang thay đổi rồi thì tiếp tục tìm xem rounds nào đang thay đổi => tăng điểm nó lên 1
                            item?.rounds.map(item => {
                                if (item.idRound == idRound) {
                                    item.score = item.score + 1
                                }
                            })
                        }
                    })
                }
            })
            dataMain[0].game = dataUpdate
            fs.writeFile(dbPath, JSON.stringify(dataMain), (err) => {
                if (err) {
                    res.status(400).json({ msg: "Error" })
                } else {
                    res.status(200).json({ msg: "Success" })
                }
            })
        }
    })
})

// Api giảm  điểm người chơi
router.patch("/down-point/:id", (req, res) => {
    let idGame = Number(req.params.id)
    let idPlayer = Number(req.body.idPlayer)
    let idRound = Number(req.body.idRound)
    console.log("game", idGame);
    console.log("player", idPlayer);
    console.log("round", idRound);
    fs.readFile(dbPath, (err, data) => {
        if (err) {
            res.status(400).json({ msg: "Error" })
        } else {
            let dataMain = JSON.parse(data)
            let dataUpdate = dataMain[0].game
            // lặp qua từng game và kiểm tra id của game nào thay đổi
            dataUpdate.map(item => {
                if (item.id == idGame) {
                    // có được game thay đổi,tiếp tục lặp qua kiểm tra xem player nào đang thay đổi
                    item?.players.map(item => {
                        if (item?.idPlayer == idPlayer) {
                            // có được player nào đang thay đổi rồi thì tiếp tục tìm xem rounds nào đang thay đổi => giảm điểm nó xuống 1
                            item?.rounds.map(item => {
                                if (item.idRound == idRound) {
                                    item.score = item.score - 1
                                }
                            })
                        }
                    })
                }
            })
            dataMain[0].game = dataUpdate
            fs.writeFile(dbPath, JSON.stringify(dataMain), (err) => {
                if (err) {
                    res.status(400).json({ msg: "Error" })
                } else {
                    res.status(200).json({ msg: "Success" })
                }
            })
        }
    })
})



module.exports = router