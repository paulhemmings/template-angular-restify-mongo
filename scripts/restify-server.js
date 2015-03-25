var restify = require('restify')
    db = require( __dirname + '/database/database'),
    itemService = require( __dirname + '/services/item-service');

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

// example of using a service to retrieve data from MongoDB

server.get('/items/:id', function(req, res, next) {
  itemService.get(id).then(function(data) {
    res.send(data);
    next();
  });

});

server.get('/items', function(req, res, next) {
  itemService.all().then(function(data) {
    console.log(JSON.stringify(data));
    if (data.success && data.content.length == 0) {
        itemService.persist({ name: 'test-data', content: 'test-content' });
    }
    res.send(data);
    next();
  });
});


// start the server listening

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
