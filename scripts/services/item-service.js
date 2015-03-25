var Mongoose = require('mongoose'),
    Item = Mongoose.model('Item'),
    Promise = require("node-promise").Promise;

exports.all = function() {
  var promise = new Promise();
	Item.find(function(err, items) {
		if(err) {
      console.log(err.error);
      promise.resolve ({ success : false, error: err.error });
		}
    console.log("returning items");
    promise.resolve ({ success : true, content : items });
	});
  return promise;
};

exports.get = function(id) {
  var promise = new Promise();
	Item.find({ _id : id }, function(err, items) {
    if(err) {
      console.log(err.error);
      promise.resolve ({ success : false, error: err.error });
		}
    promise.resolve ({ success : true, content : items });
	});
  return promise;
};

exports.persist = function(model) {
  var promise = new Promise();
	var item = new Item(model || {});
	item.save(function(err) {
    if(err) {
      console.log(err.error);
      promise.resolve ({ success : false, error: err.error });
		}
    promise.resolve ({ success : true, content : item });
	});
  return promise;
};

exports.delete = function(id) {
  var promise = new Promise();
	Item.remove({ _id: id }, function (err) {
    if(err) {
      console.log(err.error);
      promise.resolve ({ success : false, error: err.error });
		}
    promise.resolve ({ success : true, content : id });
	});
  return promise;
};
