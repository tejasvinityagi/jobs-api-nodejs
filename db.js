const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please provide name"],
        minlength: 3,
        maxlength:10

    },
    email:{
        type:String,
        required:[true, "Plese provide email"],
        match:
       [ /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i],
       unique: true,
    },
    password:{
        type:String,
        required: [true, "Please provide password"],
        minlength: 6,
        maxlength: 30
    },
    phone:{
        type: Number,
        required: false,
        minlength:10,
        maxlength:12,
        unique: true
    }

})


module.exports= mongoose.model('User', UserSchema)