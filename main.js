require('dotenv').config()
require('express-async--errors')
const express  = require('express')
const app = express()


// connectDB
// mongoose.connect('mongodb://127.0.0.1:27017/test');

const connectdb = require('./connect.js')


// ROUTERS


// error handaling middleware
const notFoundMiddleware = require('./middleware-not-found')
const errorHnadlerMiddleware = require('./middleware-error-handler');
const mongoose = require('mongoose');

app.use(express.json())

// routes
app.use('/auth', authRouter)
app.use('/userrout', jobsRouter) 

app.use(notFoundMiddleware)
app.use(errorHnadlerMiddleware)

const port = process.env.PORT || 3000

const start = async ()=>{

    try{
        await connectdb(process.env.MONGO_URL)
        app.listen(port, console.log("server is listening" ))
    } catch (error){


    }
}