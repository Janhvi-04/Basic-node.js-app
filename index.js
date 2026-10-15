const express=require("express");
const app=express();
app.get("/",(req,res)=>res.send("Hello Azure CI/CD! It's day twoooo"));
app.listen(3000,()=>console.log("App runnning on port 3000"));
