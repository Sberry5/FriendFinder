// ====== Required Packages ===== //
var path = require("path");


// ====== Routing ===== //
module.exports = function(app){

// Home routing
	app.get("/home", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});


// Survey routing
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"))
	});

};