const express = require("express");
import 'dotenv/config'

const app = express();

const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.send("hello update nodemon") 
})

app.get("/leanh", (req, res) => {
    res.send("leanhhhh") 
})

app.get("/abc", (req, res) => {
    res.send(
        `<h1 style="color: red">ABC</h1>`
    ) 
})

app.listen(PORT, () => {
    console.log(`running on port...: ${PORT}`);
    console.log("port env: ", process.env.PORT)
})