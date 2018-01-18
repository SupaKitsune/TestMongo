//add one entry to database
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	var dbObj = db.db("mydb");
	var myDataObj = [
	{game: "Warframe", genre: "FPS PVE"},
	{game: "DDLC", genre: "Horror"},
	{game: "Rocket League", genre: "Sport"},
	{game: "Train Simulator 2018", genre: "Simulation"},
	{game: "XCOM", genre: "Strategy"}
	];
	
	dbObj.collection("games").insertMany(myDataObj, function(err, res){
		if(err) throw err;
		console.log("Number of games inserted: " + res.insertedCount);
		db.close();
	})
});