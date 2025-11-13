const express = require("express");
import 'dotenv/config'

const app = express();

const PORT = process.env.PORT || 8080;

//config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/", (req, res) => {
    res.send("hello update nodemon") 
})

app.get("/leanh", (req, res) => {
    res.send("leanhhhh") 
})

app.get("/abc", (req, res) => {
    res.render("home.ejs")
})

app.listen(PORT, () => {
    console.log(`running on port...: ${PORT}`);
    console.log("port env: ", process.env.PORT)
})