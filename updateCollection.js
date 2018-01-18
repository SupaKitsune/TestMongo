//update datum collection
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db){
	if(err) throw err
	
	var dbObj = db.db("mydb")
	var queryKey = {genre: "Simulation"}
	var newData = {genre: "Ya-"}
	var updateData = {$set:newData}
	
	dbObj.collection("games").updateOne(queryKey, updateData, function(err, delOK){
		if(err) throw err;
		if(delOK) console.log("updated")
		db.close()
	})
})