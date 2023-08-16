const express = require("express");
const UserController = require("../controllers/userController");
const checkAuthentication = require("../middlewares/checkAuth");
const checkRoleUserLogin = require("../middlewares/checkRoleUser");
const router = express.Router();

router.post("/login", UserController.handleLogin)
router.post("/register", UserController.handleRegister)
router.post("/refresh-token", UserController.refreshToken)
router.post("/logout", checkAuthentication, UserController.logout)

router.get("/get-user", checkAuthentication, checkRoleUserLogin, UserController.handleGetUser)

router.get("/", (req, res) => {
    res.json("Ok")
})


module.exports = router;