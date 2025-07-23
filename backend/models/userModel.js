const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    username: {
        type:String,
        unique: true,
        required: [true, "Input your username"],
    },

    email: {
        type:String,
        unique: true,
        required: [true, "Input your Email Adress"],

    },

    password: {
        type:String,
        required: [true, "Input your Password"],
    },

    riotPuuid: {
        type:String,
        default: null 
    },
    gameName: { 
        type: String,
        default: null  
    }, 
    tagLine: { 
        type: String,
        default: null  
    },  
    region: { 
        type: String,
        default: null  
    } 
  },

  {
    timestamps: true
  }

);

module.exports = mongoose.model("User", userSchema)
