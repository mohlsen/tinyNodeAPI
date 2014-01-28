#!/usr/local/bin/node

var app = require('express.io')(),
	port = process.env.PORT || 8080;

app.http().io();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/api', function(req, res) {
	"use strict";
    res.send({data:'test'});
});

app.listen(port, function () {
    "use strict";
    console.log("Express.io server listening on port %d.",
                this.address().port);
});
