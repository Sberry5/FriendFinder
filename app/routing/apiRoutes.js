// ====== Required Packages ===== //
var path = require("path");


// ====== API GET Routing ===== //
app.get("/api/friends", function(req, res){
	res.get(friends);
});


// ====== API POST Routing ===== //
  app.post("/api/friends", function(req, res) {
 	var newFriend = req.body;
 	newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
 	
 	console.log(newFriend);

 	friends.push(newFriend);

 	res.json(newFriend);
  });
 
// To clear out table when working on functionality
//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     friends = [];
//     console.log(friends);
//   });
// };