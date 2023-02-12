require('dotenv').config()
const express = require("express");
//const logIn = require('./model/logIn');
const userRouter = require("./routs/userRouter");
const logInRouter=require("./routs/logInRouter") ;
const app=express();
const PORT = process.env.PORT || 3600

app.use(express.json())
app.use("/user",userRouter)
app.use("/logIn",logInRouter)
app.listen(PORT, () => {
    console.log("app ruuning");
});
