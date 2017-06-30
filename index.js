const express = require('express');
const http = require('http');

const port = process.env.PORT || 3000;

var app = express();
app.get('/', function(req, res) {
	res.status(500).send('Faliure is an integral part of learning.');
});

http.createServer(app).listen(port, function() {
	console.log('Server listening on port ' + port);
});

module.exports.app = app;
