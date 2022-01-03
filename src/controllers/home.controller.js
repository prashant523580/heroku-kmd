exports.homeController = (req,res) => {
		res.render("index.hbs")
}
exports.aboutController = (req,res) => {
	res.render("about.hbs");
}
exports.contactController = (req,res) => {
	res.render("contact.hbs");
}