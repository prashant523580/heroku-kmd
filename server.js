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
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods","GET POST DELETE,PATCH,PUT");
	res.header("Access-Control-Allow-Headers","Accept, Authorization ,Origin,Content-Type",'X-Requested-With')
	next();
});

var paginate = require('handlebars-paginate');
 
hbs.registerHelper('paginate', paginate);
 
/* ... */
 
// var html = template({pagination: {
//   page: 3,
//   pageCount: 10
// }});
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