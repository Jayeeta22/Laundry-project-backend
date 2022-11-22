const express=require("express");
const app=express()
const dotenv=require("dotenv")
const port=process.env.PORT || 8000;
app.use(express.json())
dotenv.config({path:"./config.env"})
// required connection.js 
require("./db/connection")
require("./models/userSchema")
// Link the router files
app.use(require("./router/auth"))


// middlewaire
const middlewaire=(req,res,next)=>{
    console.log('HELLO from middleware');
    next()
}


app.get("/",async(req,res)=>{
    try{
       res.send("hello")
    }catch(e){
        res.status(400).send(e)
    }
})


app.get("/about", middlewaire,async(req,res)=>{
    try{
        console.log("hello about")
       res.send("hello about")
    }catch(e){
        res.status(400).send(e)
    }
})

app.get("/contact",async(req,res)=>{
    try{
       res.send("hello contact")
    }catch(e){
        res.status(400).send(e)
    }
})

app.get("/signin",async(req,res)=>{
    try{
       res.send("hello")
    }catch(e){
        res.status(400).send(e)
    }
})


app.listen(port,()=> {
    console.log(`server is up in ${port}`)
}
)