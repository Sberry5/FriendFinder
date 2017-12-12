// ====== Required Packages ===== //
var path = require("path");


// ====== API GET Routing ===== //
var friends = require("../data/friends.js");


// ====== Routing Function ===== //
module.exports = function(app) {


// ====== API GET Routing ===== //
app.get("/api/friends", function(req, res) {
	res.json(friends);
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

 	for (var i=0; i < friends.length; i++){
 		console.log(friends[i].name);
 		totalDifference = 0;

 		for (var j=0; j < friends[i].scores[j]; j++) {
 			totalDifference += Math.abs(parseInt(newScores[j]) - parseInt(friends[i].scores[j]));
 				if (totalDifference <= userMatch.friendDifference) {
 					userMatch.name = friends[i].name;
 					userMatch.photo = friends[i].photo;
 					userMatch.friendDifference = totalDifference;
 					console.log(userMatch);
 				}
 			}
 		}

 		friends.push(newUser);

 		res.json(userMatch);
	});
}
