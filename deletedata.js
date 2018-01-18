//delete data
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	var dbObj = db.db("mydb");
	var queryKey = {game: /^R/}; //^ (control) means look at the front
	
	dbObj.collection("games").deleteMany(queryKey, function(err, res){
		if(err) throw err;
		console.log(res.result.n + " deleted")
		db.close()
	})
})