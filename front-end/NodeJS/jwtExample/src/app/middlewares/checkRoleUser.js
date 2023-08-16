const jwt = require('jsonwebtoken')


const checkRoleUserLogin = (req, res, next) => {
    console.log(1111, req.user);
    if (req.user.role === 2) {
        next()
    } else {
        res.sendStatus(403)
    }
}

module.exports = checkRoleUserLogin