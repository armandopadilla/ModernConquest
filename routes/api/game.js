/api/game/getWinner
/api/game/getSide
/api/game/getTurn
/api/game/getplayers

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Game = new Schema({
    
    id: ObjectId,
    player_1: int,
    plater_2: int, 
    created_date: Date,
    winner: 
    
});


////API:: Does one user taken over all the territories?  <--- winning condition check.
//If no user id is returned then there is no winner yet.
var getWinner = function(req, res)
{
    //Fetch the game id
    var gameId = req.param("game_id");
    
    
    //Set the win condition here.
    //Fetch all the territories. If all territories are owned by 
    //one user that user is the winner.
    
    
}

/**
 * Determine who will go first.
 */
var getWhoWillGoFirt = function()
{
    //Fetch the users in the game.
    

    var possibleTurns = ["1", "2"];  //Increase if we want more positions
    var turn = possibleTurns[Math.floor(Math.random()*possibleTurns.length)];
    
    //Push out turn to both players - socket io
    //Push out to user 1 
    //Push out to user 2
}

//Select the territory for each user at random
var getTerritoryColor = function()
{
    //Fetch the users in the game.
    //Fetch their session so we can push a message to them
    //@todo
    
    var possibleColors = ["grey", "black"];
    
    var position       = Math.floor(Math.random()*possibleColors.length);
    var initColor      = possibleColors[position];
    
    var secondaryColor = possibleColors[0];
    
    if(position == 0)
    {
        secondaryColor = possibleColors[1];
    }
    
    //Push out to each user using a socket.io
    
}