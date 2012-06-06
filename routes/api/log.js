//Schema Model for Mongoose.
var Messages = new Schema({
    
    id           : ObjectId,
    message      : {type: String, required: true},
    created_date : {type:Date, default: Date.now}
    
});

var Logger = new Schema({
    
    id           : ObjectId,
    messages     : [Messages],
    created_date : {type: Date, default: Date.now}
    
});


var conn = mongoose.createConnection();
var LogModel = conn.model("Logger", "Logger");
var logger = new LogModel;



/**
 * Log activity and save to DB.
 */
var log_message = function(req, resp)
{
    //Fetch parameters
    var gameId = req.param("game_id");
    var message = req.param("messsage");
    
    //Add to DB.
    logger.messages.push({message : message});
    logger.save();
    
    res.json({status: 'OK'});
    
}


//Add the functions for use.
exports.log = log;