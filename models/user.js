const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
    }
});

userSchema.plugin(passportLocalMongoose); //it automatically implement username,password,hash password,hash username

module.exports = mongoose.model('User', userSchema);