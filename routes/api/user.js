db.users.save(
{first_name: 'Armando', 
 last_name: 'Padilla',
 username: 'armandopadilla',
 rank: 'Aircraftman',
 branch: 'Air Force', 
 total_units_bought: 0,
 games_won: 0,
 games_lost: 0,
 wallet_total_coins: 100,
 wallet_transaction_log : []
 type: 'admin'});


require("mongoose");
var conn = mongoose.connect('mongodb://localhost/modernwarfare');

//Define the Model
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    username: {type: String, required: true},
    rank: {type: String, required: true},
    branch: {type: String, required: true},
    total_units_bought: {type: Number, default: 0},
    games_won: {type: Number, default: 0},
    games_lost: {type: Number, default: 0},
    wallet_total_coins: {type: Number, default: 0.00}
    wallet_transaction_log: [Message],
    user_type: {type: String, default: "User", required: true}
    
});

var UserModel = mongoose.model('User', UserSchema);


/**
 * Fetch the user information 
 * Contains the users wallet, rank, branch, etc.
 */
var fetchUserInfo = function(req, resp)
{
    //Fetch the username
    var username = req.param("username");
    
    //Fetch the data from the db.
    var UserInst = new UserModel();
    var userData = UserInst.find({username: username});
    console.dir(userData);
    //Send out the data as json.
    resp.json(userData);
    
}

exports.fetchuserinfo = fetchUserInfo;