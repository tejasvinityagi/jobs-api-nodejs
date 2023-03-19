const express = require('express');
const router = express.Router()


const {login, register} = require('./user.js')

router.post('/register', register)
router.post('/login', login)

module.exports = router