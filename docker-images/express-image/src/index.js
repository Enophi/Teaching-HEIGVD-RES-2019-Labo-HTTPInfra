const Chance = require('chance');
var chance = new Chance();
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hello from RES");
});

app.listen(3000, function() {
    console.log("Accepting HTTP request on port 3000");
});