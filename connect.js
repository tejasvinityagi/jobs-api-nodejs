const mongoose = require('mongoose');


const connectdb = (url)=>{
    return mongoose.connect(url), {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
    }
}

module.exports = connectdb