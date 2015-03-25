var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemSchema = new Schema({
	name : String,
	content : String
});

mongoose.model('Item', ItemSchema);
