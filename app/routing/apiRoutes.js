// ====== Required Packages ===== //
var path = require("path");


// ====== API GET Routing ===== //
var friendsArray = require("../data/friends.js");


// ====== Routing Function ===== //
module.exports = function(app){


// ====== API GET Routing ===== //
app.get("/api/friends", function(req, res){
	res.json(friendsArray);
});


// ====== API POST Routing ===== //
app.post("/api/friends", function(req, res) {
 	var userMatch = {
 		name: "",
 		photo: "",
 		scoreDifference: 1000
 	};

 	var newUser = req.body;
 	var newName = newUser.name;
 	var newPhoto = newUser.photo;
 	var newScores = newUser.scores;

 	var totalDifference = 0;

 	for (var i=0; i < friendsArray.length; i++){

 	}
});
}

// To clear out table when working on functionality
//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     friendsArray = [];
//     console.log(friendsArray);
//   });
// };