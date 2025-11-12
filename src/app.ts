//import express
const express = require("express");
const app = express();

//khai bao cong
const PORT = 8080

app.get("/", (req, res) => {
    res.send("hello update") 
})

app.get("/leanh", (req, res) => {
    res.send("leanhhhh") 
})

//chay ung dung voi cong 8080
app.listen(8080, () => {
    console.log(`running on port...: ${PORT}`);
})