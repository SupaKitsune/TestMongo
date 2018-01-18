//delete one item from database
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	var dbObj = db.db("mydb");
	var queryKey = {genre: "FPS PVE"};
	
	dbObj.collection("games").deleteOne(queryKey, function(err, res){
		if(err) throw err;
		console.log("Datum deleted")
		db.close()
	})
})