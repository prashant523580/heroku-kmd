// const products = require("../data.json");
// console.log(products)
const products = [
	{
		"name": "Bag Valve Mask",
		"manufacturer" : "KMMEI",
		"brand": "KMMEI",
		"model" : "KMMEI-360",
		"countryOfOrigin" : "Nepal",
		"img": "/images/products/01.jpg"
	},
	{
		"name": "Bi-level positive airway pressure(BIPAP) ",
		"manufacturer" : "BMC Niscomed",
		"brand" : "BMC Nicomed",
		"model" : "BMC G II",
		"countryOfOrigin" : "China"
	},
	{
		"name": "Blood Gas Analyser",
		"manufacturer" : "HDC India" ,
		"brand" : "HDC India",
		"model" : "HDL-LYTE plus",
		"countryOfOrigin" : "India"
	},
	{
		"name": "Defibrillator With AED",
		"manufacturer" : "BPL",
		"brand": "BPL",
		"model" : "DF 2617",
		"countryOfOrigin" : "India"
	},
	{
		"name": "Electrolyte Analyser",
		"manufacturer" : "HCL India",
		"brand": "HCL India",
		"model" : "HCL EA",
		"countryOfOrigin" : "India"
	},
	{
		"name": "ICU Bed with Mattress/ Electric",
		"manufacturer" : "KMMEI",
		"brand": "KMMEI",
		"model" : "KMMEI-102",
		"countryOfOrigin" : "Nepal"
	},
	{
		"name": "ICU Ventilator (Neonate to Adult)",
		"manufacturer" : "siriusmed",
		"brand": "siriusmed",
		"model" : "R 30",
		"countryOfOrigin" : "China"
	},
	{
		"name": "Infusion Pump",
		"manufacturer" : "Contec",
		"brand": "Contec",
		"model" : "SP 800",
		"countryOfOrigin" : "China"
	},
	{
		"name": "laryngoscope set Children & adult",
		"manufacturer" : "AI2",
		"brand": "AI@",
		"model" : "Lyringscope",
		"countryOfOrigin" : "Pakistan"
	},
	{
		"name": "Nebuliser",
		"manufacturer" : "KMMEI",
		"brand": "KMMEI",
		"model" : "KMMEI-390",
		"countryOfOrigin" : "Nepal"
	},
	{
		"name": "Needle Destroyer",
		"manufacturer" : "KMMEI",
		"brand": "KMMEI",
		"model" : "KMMEI-257",
		"countryOfOrigin" : "Nepal"
	},
	{
		"name": "Bed Side Patient Monitor",
		"manufacturer" : "Contec",
		"brand": "Contec",
		"model" : "CMS 8000",
		"countryOfOrigin" : "China"
	},
	{
		"name": "Pulse Oxymeter(Hand Held)",
		"manufacturer" : "Niscomed",
		"brand": "Niscomed",
		"model" : "NHH",
		"countryOfOrigin" : "China"
	},
	{
		"name": "Sphygmomanometer (BP Apparatus digital)",
		"manufacturer" : "KMMEI",
		"brand": "KMMEI",
		"model" : "KMMEI-325",
		"countryOfOrigin" : "Nepal"
	},
	{
		"name": "Electric Suction Pump(surgical Aspirator)",
		"manufacturer" : "KMMEI",
		"brand": "KMMEI",
		"model" : "KMMEI-209",
		"countryOfOrigin" : "Nepal"
	},
	{
		"name": "Syringe Pump",
		"manufacturer" : "Contec",
		"brand": "Contec",
		"model" : "SP 500",
		"countryOfOrigin" : "China"
	},
	{
		"name": "Transport Incubator",
		"manufacturer" : "KMMEI",
		"brand": "KMMEI",
		"model" : "KMMEI-353",
		"countryOfOrigin" : "Nepal"
	},
	{
		"name": "Trolley Instrument",
		"manufacturer" : "KMMEI",
		"brand": "KMMEI",
		"model" : "KMMEI-155,158",
		"countryOfOrigin" : "Nepal"
	},
	{
		"name": "Vein finder",
		"manufacturer" : "Dectroid",
		"brand": "Dectroid",
		"model" : "VS-10",
		"countryOfOrigin" : "india",
	},
	{
		"name": "Bed Side Monitor(ICU) with control monitoring",
		"manufacturer" : "Contec",
		"brand": "Contec",
		"model" : "CMS 8000",
		"countryOfOrigin" : "China"
	},
	{
		"name": "ICU Bed (Electric)",
		"manufacturer" : "KMMEI",
		"brand": "KMMEI",
		"model" : "KMMEI-102 page-4",
		"countryOfOrigin" : "Nepal"
	},
	{
		"name": "Flat Panel Detector System",
		"manufacturer" : "any",
		"brand": "any",
		"model" : "any",
		"countryOfOrigin" : "India"
	},
	{
		"name": "Ventilator ICU ",
		"manufacturer" : "Cardiolabs",
		"brand": "Cardiolabs",
		"model" : "Cvent 1200T",
		"countryOfOrigin" : "India"
	},
	{
		"name": "Defibrillator with monitor & A.E.D function",
		"manufacturer" : "BPL",
		"brand": "BPL",
		"model" : "Relife 900",
		"countryOfOrigin" : "India"
	},
	{
		"name": "ABG Analyzer",
		"manufacturer" : "Edan",
		"brand": "Edan",
		"model" : "i15",
		"countryOfOrigin" : "China"
	},
	{
		"name": "ECG Machine (12 channel)",
		"manufacturer" : "Contec",
		"brand": "Contec",
		"model" : "ECG 1200 G",
		"countryOfOrigin" : "China"
	},
	{
		"name": "Patient Monitor",
		"manufacturer" : "Contec",
		"brand": "Contec",
		"model" : "CMs 8000",
		"countryOfOrigin" : "China"
	},
	{
		"name": "Bag Valve Mask",
		"manufacturer" : "surgical devices hub",
		"brand": "vinjob",
		"model" : "BVM",
		"countryOfOrigin" : "India"
	},
	{
		"name": "Portable x-ray machine 100mA",
		"manufacturer" : "vision x-ray",
		"brand": "100 vision",
		"model" : "V-100",
		"countryOfOrigin" : "India"
	},
	{
		"name": "wheel chair (foldable)",
		"manufacturer" : "professional",
		"brand": "professional",
		"model" : "W chair",
		"countryOfOrigin" : "China/Nepal"
	},
	{
		"name": "Weighing Machine with height measuring scale",
		"manufacturer" : "professional",
		"brand": "professional",
		"model" : "baby height",
		"countryOfOrigin" : "China"
	},
	{
		"name": "OtoScope Set",
		"manufacturer" : "HEINE",
		"brand": "HEINE",
		"model" : "otoscope",
		"countryOfOrigin" : "Germany"
	},
	{
		"name": "Ophthalmoscope Direct",
		"manufacturer" : "HEINE",
		"brand": "HEINE",
		"model" : "HEINE optho",
		"countryOfOrigin" : "Germany"
	},
	{
		"name": "Scale, Electronic Adult Weighing",
		"manufacturer" : "professional",
		"brand": "professional",
		"model" : "D.W.M",
		"countryOfOrigin" : "China"
	},
	{
		"name": "Air Conditionar(A.C)",
		"manufacturer" : "wiri port",
		"brand": "wiriport",
		"model" : "2Ton",
		"countryOfOrigin" : "India"
	},
	{
		"name": "USG Portable Colour Doppler",
		"manufacturer" : "ZonCare",
		"brand": "ZonCare",
		"model" : "Q-3",
		"countryOfOrigin" : "China"
	},
	{
		"name": "Suction Pump",
		"manufacturer" : "KMMEI",
		"brand": "KMMEI",
		"model" : "KMMEI-209",
		"countryOfOrigin" : "Nepal"
	},
	{
		"name": "Crash Cart",
		"manufacturer" : "KMMEI",
		"brand": "KMMEI",
		"model" : "KMMEI-169 page-21",
		"countryOfOrigin" : "Nepal"
	},
	{
		"name": "Trolley Medicine",
		"manufacturer" : "KMMEI",
		"brand": "KMMEI",
		"model" : "KMMEI-155",
		"countryOfOrigin" : "Nepal"
	}
];

exports.homeController = (req,res) => {
		res.render("index.hbs")
}
exports.aboutController = (req,res) => {
	res.render("about.hbs");
}
exports.contactController = (req,res) => {
	res.render("contact.hbs");
}
exports.productController = (req,res) => {
	try{

	res.render("product.hbs",{
		products
			})
	
		
	}catch(err){
			res.status(400).json({error : err})
	}
}
exports.getProducts = (req,res) => {
	try{

		console.log(req.params)
	res.status(200).json({products})
		
	}catch(err){
			res.status(400).json({error : err})
	}
}