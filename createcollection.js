//create a collection database
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	// console.log("connection to MongoDB made");
	// db.close();
	
	var dbObj = db.db("mydb");
	
	dbObj.createCollection("games", function(err, res){
		if(err) throw err;
		console.log("collection \""+dbObj.name+"\" created");
		//console.log("collection created");
		db.close();
	});
});