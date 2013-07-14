var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  var fileStr = fs.readFileSync('index.html');
 
  console.log(fileStr);
//  response.send(fileStr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
