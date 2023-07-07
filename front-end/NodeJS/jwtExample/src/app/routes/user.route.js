const express = require("express");
const UserController = require("../controllers/userController");
const checkAuthentication = require("../middlewares/checkAuth");
const router = express.Router();

router.post("/login",UserController.handleLogin)
router.post("/register",UserController.handleRegister)


router.get("/get-user",checkAuthentication,UserController.handleGetUser)

router.get("/", (req, res) => { 
    res.json("Ok")
})


module.exports = router;