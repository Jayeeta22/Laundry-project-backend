const mongooes=require("mongoose")
const userSchema=new mongooes.Schema({
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
        type:Number,
        required:true
    },
    Assress:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Cpassword:{
        type:String,
        required:true
    }

})
const user=mongooes.model("User",userSchema);
module.exports=user