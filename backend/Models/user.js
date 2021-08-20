const mongoose = require('mongoose');

const data =new  mongoose.Schema({

    name:String,
    email:String,
    address:String,
    number:String,
})

module.exports = mongoose.model('userdata',data)