var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.set('useFindAndModify', false);

var itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    quantity: {
        type:Number,
	required: true
    }
});

const Item = module.exports = mongoose.model('Item', itemSchema);