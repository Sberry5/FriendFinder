// ====== Required Packages ===== //
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");


// ====== Indicates Server and Initialize Port ===== //
var app = express();
var PORT = process.env.PORT || 3000;


// ====== Allow Server to Interpret Data via body-parser ===== //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// ====== Map for server use routes created ===== //
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// ====== Listening to start server ===== //
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
