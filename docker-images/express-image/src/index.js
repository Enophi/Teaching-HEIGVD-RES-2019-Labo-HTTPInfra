var express = require('express');
var app = express();
var faker = require('faker');

app.get('/', generateRandomData );

app.listen(3000, function() {
    console.log("Accepting HTTP request on port 3000");
});

function generateRandomData( req , res ) {

    // Randomize the response
    if(Math.random() >= 0.5)
        res.status(200).send(faker.helpers.createCard());
    else
        res.status(401).send({"status":"You are not authorize!"})

}