const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Loginc').then(()=>{
    console.log("Mongodb connectd Succesfully");
}).catch((err)=>{
    console.log("Not Connectd",err);
})