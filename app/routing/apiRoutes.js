// ====== Required Packages ===== //
var path = require("path");


// ====== API GET Routing ===== //
var friendsArray = require("../data/friends");


// ====== Routing Function ===== //
module.exports = function(app){


// ====== API GET Routing ===== //
app.get("/api/friends", function(req, res){
	res.json(friendsArray);
});


// ====== API POST Routing ===== //
app.post("/api/friends", function(req, res) {
 	var newPerson = req.body;
 	
 	console.log(newPerson);

 	friends.push(newPerson);

 	res.json(newPerson);
});
 
}

// To clear out table when working on functionality
//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     friendsArray = [];
//     console.log(friendsArray);
//   });
// };