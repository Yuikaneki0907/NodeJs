const express = require("express");
import 'dotenv/config';
import webRoutes from './routes/web';

const app = express();

const PORT = process.env.PORT || 8080;

//config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

webRoutes(app);

app.listen(PORT, () => {
    console.log(`running on port...: ${PORT}`);
    console.log("port env: ", process.env.PORT);
})