//find one entry in database
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	// console.log("connection to MongoDB made");
	// db.close();
	
	var dbObj = db.db("mydb");
	//var myDataObj = {game: "Warframe", genre: "FPS PVE"};
	
	//you need a place to put the data but it was already made in the last example
	// dbObj.createCollection("games", function(err, res){
		// if(err) throw err;
		// console.log("collection \""+dbObj.name+"\" created");
		// //console.log("collection created");
		// db.close();
	// });
	
	//there needs to be data to find but it was already added in the last example
	// dbObj.collection("games").insertOne(myDataObj, function(err, res){
		// if(err) throw err;
		// console.log("added one datum");
		
		// db.close();
	// });
	
	dbObj.collection("games").findOne({}, function(err, res){
		if(err) throw err;
		console.log(res.game);
		db.close();
	})
});