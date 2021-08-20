const mongoose = require('mongoose');

const signup = new mongoose.Schema({
    username:String,
    // useremail:String,
    // password:String,
    useremail: {
        type: String,
        unique: true,
        required: true
    
      },
      password:{
          type: String,
          required:true
      }
})
module.exports = mongoose.model("SignUp",signup)