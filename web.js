var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  // Reads contents from the index.html file into a string 
  var fileStr = fs.readFileSync('index.html');
 
  // Prints contents out inside the webpage
  response.send(fileStr.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
