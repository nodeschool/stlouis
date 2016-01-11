var connect = require('connect');
var serveStatic = require('serve-static');
var port = 49976;
connect().use(serveStatic(__dirname)).listen(port);
console.log("Listening on " + port);
