const express = require('express');
const config = require('./config/config');
var app = express();

require('./config/express')(app, config);

require('http').createServer(app).listen(config.port, function () {
    console.log("HTTP Server listening on port: ", config.port);
});

module.exports = app;