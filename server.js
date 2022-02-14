const express = require("express");
const dotenv = require("dotenv")
const hbs = require("hbs");
const path = require("path");
const bodyParser = require("body-parser");
// const products = require("./src/data.json");
// console.log(products);
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const homePageRoute = require("./src/routes/home.route.js");

const staticPath = path.join(__dirname,"/public");
const templatePath = path.join(__dirname,"/templates/views");
const partialsPath = path.join(__dirname,"/templates/partials");

app.use((req,res,next) => {
	res.header("Allow-Controll-Allow-Origin", "*");
	res.header("Allow-Controll-Allow-Methods","GET POST DELETE,PATCH,PUT");
	res.header("Allow-Controll-Allow-headers","Accept, Authorization ,Origin,Content-Type",'X-Requested-With')
	next();
})
app.set("views", templatePath);
app.set("hbs", "view engine");
hbs.registerPartials(partialsPath);
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(staticPath));
app.use("/",homePageRoute);

app.listen(PORT,() =>{
	console.log(`listening to port ${PORT}`);
} )