const express = require("express");
const UserController = require("../controllers/userController");
const checkAuthentication = require("../middlewares/checkAuth");
const checkRoleUserLogin = require("../middlewares/checkRoleUser");
const router = express.Router();
const User = require('../models/User.model')
router.post('/user', async (req, res) => {
    try {
        const data = req.body
        const user = await User.create({ firstName: data.firstName, lastName: data.lastName });
        res.json({ msg: 'Successfully' })
    } catch (error) {
        res.json({ msg: 'Error' })
    }
})

router.get('/user', async (req, res) => {
    try {
        const user = await User.findAll({ include: 'Infors' });
        res.json(user)
    } catch (error) {
        res.json({ msg: 'Error' })
    }
})

router.delete('/user/:id', async (req, res) => {
    try {
        const id = req.params.id
        const result = await User.destroy({ where: { id } })
        console.log(result)
        if (!result) {
            res.status(404).json({ msg: 'user not found' })
        } else {
            res.status(200).json({ msg: 'delete successfully' })
        }
    } catch (error) {
        res.status(400).json({ msg: 'Error' })
    }
})

router.patch('/user/:id', async (req, res) => {
    try {
        const id = req.params.id
        const result = await User.update({ lastName: req.body.lastName }, { where: { id } })
        console.log(result)

        result[0] > 0
        if (!result[0]) {
            res.status(404).json({ msg: 'user not found' })
        } else {
            res.status(200).json({ msg: 'delete successfully' })
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'Error' })
    }
})

router.get('/user/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findByPk(id);
        res.json(user)
    } catch (error) {
        res.json({ msg: 'Error' })
    }
})

router.post("/login", UserController.handleLogin)
router.post("/register", UserController.handleRegister)
router.post("/refresh-token", UserController.refreshToken)
router.post("/logout", checkAuthentication, UserController.logout)

router.get("/get-user", checkAuthentication, checkRoleUserLogin, UserController.handleGetUser)

router.get("/", (req, res) => {
    res.json("Ok")
})


module.exports = router;