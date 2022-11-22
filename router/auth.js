const express=require("express")
const Router=express.Router();

require("../db/connection")   //connection with database
const User=require("../models/userSchema")
Router.get("/",(req,res)=>{
    res.send("hello from router")
})

//using async await
Router.post("/register",async(req,res)=>{
    console.log(req.body)
  // res.json({massage:req.body}) //get this data in postman
    const {Name,Email,Phone,State,District,Assress,password,Cpassword}=req.body
    if(!Name || !Email || !Phone || !State || !District || !Assress ||!password || !Cpassword){
        return res.status(422).json({Error:"All fields are mandatory"})
    }

    try{
      const userexist=await  User.findOne({Email:Email})

        if(userexist){
            return res.status(422).json({Error:"This email already exist"})
        }
        const user=new User({Name,Email,Phone,State,District,Assress,password,Cpassword})
       await user.save();
       
        res.status(201).json({Massage:"Registration successful"}) 
       

    }catch(err){
        console.log(err)
    }
    })


module.exports=Router