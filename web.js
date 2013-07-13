var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var index_contents_buf = fs.readFileSync('index.html');
var index_contents = index_contents_buf.toString();

app.get('/', function(request, response) {
  response.send(index_contents);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
