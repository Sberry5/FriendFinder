// ====== Required Packages ===== //
var path = require("path");
var express = require("express");

// ====== Routing ===== //
module.exports = function(app){

// Home routing
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});


// Survey routing
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"))
	});


// Default routing to homepage
  	// app.get("*", function(req, res) {
   //  	res.sendFile(path.join(__dirname, "../public/home.html"));
  	// });

};