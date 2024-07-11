const mongoose =  require('mongoose');

const userSchema= new mongoose.Schema({

    // name:String,
    // email:String,
    // phone:String,
    // requirements:String


    
},{strict:false})

const UserModel = mongoose.model("user",userSchema);

module.exports=UserModel