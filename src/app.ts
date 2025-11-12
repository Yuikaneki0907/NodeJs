//import express
const express = require("express");

//tao express application
const app = express();

//khai bao port
const PORT = 8080

//khai bao routes
//req: request
//res: response
app.get("/", (req, res) => {
    res.send("hello update nodemon") 
})

app.get("/leanh", (req, res) => {
    res.send("leanhhhh") 
})

//chay ung dung voi cong 8080
app.listen(PORT, () => {
    console.log(`running on port...: ${PORT}`);
})