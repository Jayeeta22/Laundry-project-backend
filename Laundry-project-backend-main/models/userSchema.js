const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    State:{
        type:Number,
        required:true
    },
    District:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const user=mongoose.model("User",userSchema);
module.exports=user