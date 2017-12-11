// ====== Required Packages ===== //
var path = require("path");


// ====== API GET Routing ===== //
var friendsArray = require("../data/friends");


// ====== Routing Function ===== //
module.exports = function(app){


// ====== API GET Routing ===== //
app.get("/friends", function(req, res){
	res.json(friendsArray);
});


// ====== API POST Routing ===== //
app.post("/friends", function(req, res) {
 	var newPerson = req.body;
 	
 	console.log(newPerson);

 	friends.push(newPerson);

 	res.json(newPerson);
});
 
}

// To clear out table when working on functionality
//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     friends = [];
//     console.log(friends);
//   });
// };