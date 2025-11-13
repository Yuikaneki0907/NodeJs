import express, {Express} from "express";
import 'dotenv/config';
import webRoutes from './routes/web';

const app = express() as Express;

const PORT = process.env.PORT || 8080;

//config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

webRoutes(app);

//config static files
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`running on port...: ${PORT}`);
    console.log("port env: ", process.env.PORT);
})