
// example of using a service to retrieve data from MongoDB

exports.initialize = function(server, services) {

  // grab the services we need

  var itemService = services["ItemService"];

  // route:: get a single item

  server.get('/items/:id', function(req, res, next) {
    itemService.get(id).then(function(data) {
      res.send(data);
      next();
    });

  });

  // route:: get all items

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

};
