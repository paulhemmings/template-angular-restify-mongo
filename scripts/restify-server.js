var restify = require('restify')
    fs = require('fs');

// instantiate the server
// http://mcavage.me/node-restify/#Bundled-Plugins

var server = restify.createServer();
server.use(restify.bodyParser({ mapParams: false }));

// serve static content
// http://mcavage.me/node-restify/#Server-API

server.get(/\/(styles|app|bower_components)\/?.*/, restify.serveStatic({
  directory: './public',
  default: 'index.html'
}));

// serve the root page

server.get("/", restify.serveStatic({
  directory: './public',
  default: 'index.html'
}));

// bootstrap database and models

require( __dirname + '/database/database');

// bootstrap services

var models_path = __dirname + '/services';
var services = {};
fs.readdirSync(models_path).forEach(function(file) {
	console.log('load resource ' + file);
    services[file] = require(models_path + '/' + file);
});

// bootstrap resources

var models_path = __dirname + '/resources';
fs.readdirSync(models_path).forEach(function(file) {
	console.log('load resource ' + file);
    var resource = require(models_path + '/' + file);
    resource.initialize(server, services);
});


// start the server listening

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
