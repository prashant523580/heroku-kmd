const express = require("express");
const router = express.Router();
const {homeController,aboutController,contactController} = require("../controllers/home.controller.js");
router.get('/', homeController);
router.get('/about', aboutController);
router.get('/contact', contactController);
router.get("*",(req,res) => {
	// console.log(req.params[0]);
	let params = req.params[0];
	res.render("404_page.hbs",{
		params
	});
})
module.exports = router;