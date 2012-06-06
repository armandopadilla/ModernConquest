var mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.0.69/modernconquest');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Rank = new Schema({
    
    title: {type: String, required: true}, 
    available_from_level: {type: Number, required: true},
    availabe_to_level: {type: Number, required: true},
    created_date: {type: Date, default: Date.now, required: true}
    
    
});

var Branches = new Schema({
    
    name: {type: String, enum:['Army', 'Navy', 'Air Force'], required: true},
    ranks: [Rank],
    created_date: {type: Date, default: Date.now, required: true}
    
});


exports.odm = mongoose.model('Branches', Branches);
