require('dotenv').config()
const express = require("express");
const userRouter = require("./routs/userRouter");
const app=express();
const PORT = process.env.PORT || 3600

app.use(express.json())
app.use("/user",userRouter)

app.listen(PORT, () => {
    console.log("app ruuning");
    
});
