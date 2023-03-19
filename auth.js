const User = require('./db.js')

const register = async(req, res)=>{
    res.send("register new user")
}

const login = async(req, res)=>{
    res.send("login the existing user")
}

module.exports = {
    register,
    login
}