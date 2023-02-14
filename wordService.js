
// Setting up path variables 
var path = require("path");
var fs = require("fs")
var wordData = require('./wordData.json')

// Setting up port variables
var express = require("express")
var app = express()
var port = process.env.PORT || 3000;

//Checking that we are listening on the correct port 
app.listen(port, function () {
    console.log("== Server is listening on port: ", port)
})

app.use(function (req, res, next) {
    console.log("=== Request recieved ===")
    console.log("method: ", req.method)
    console.log("url: ", req.url)
    console.log("path: ", req.path)
    console.log("query: ", req.query)

    next()		// Go to next middleware function
})

//Response to request for easy words
app.get("/easy",function (req, res, next) {
    var len = wordData["easy"].length
    var value2 = Math.floor(Math.random() * len-1) + 1;
    console.log(wordData["easy"])
    
    var word = wordData["easy"][value2]
    console.log(word)
    res.send(word)
})

//Response to request for medium words
app.get("/medium",function (req, res, next) {
    var len = wordData["medium"].length
    var value2 = Math.floor(Math.random() * len-1) + 1;
    console.log(wordData["medium"])
    var word = wordData["medium"][value2]
    console.log(word)
    res.send(word)
})

//Response to request for hard words
app.get("/hard",function (req, res, next) {
    var len = wordData["hard"].length
    var value2 = Math.floor(Math.random() * len-1) + 1;
    var word = wordData["hard"][value2]
    console.log(word)
    res.send(word)
})