#!/usr/local/bin/node

var app = require('express.io')(),
	port = process.env.PORT || 8080;

app.http().io();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/api/UTC', function(req, res) {
	"use strict";
	var now = new Date();
    res.send({serverTime: now.toJSON()});
});

app.get('/api', function(req, res) {
	"use strict";
    res.send("API Routes can be added...");
});

app.get('/', function(req, res) {
	"use strict";
    res.send("Nothing Here.");
});

app.listen(port, function () {
    "use strict";
    console.log("Express.io server listening on port %d.",
                this.address().port);
});
