
/**
 * Module dependencies.
 */

var express = require('express'),
    routes  = require('./routes'),
    user    = require('./routes/user')


var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.set('view options', {layout : false});
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes
app.get('/', routes.index);
//app.get('/api/user/getuserinfo', api.user.getinfo);


//app.get('/signup', user.signup);           //Signup page.

//app.get('/signup/save', user.saveNewUser); //Save content of new user.
//app.get('/login', auth.login);         //Login page.
//app.get('/login/auth', auth.verfiy);   //Authenticate login.

/*
app.get('/users/top100', user.top100); //Top 100 players.
app.get('/users/top100/:branch', user.top100) //Top 100 players by branch.
app.get('/store', store.index); //Store lobby.
app.get('/store/:type/list', store.list);
app.get('/store/purchase', store.purchase);
app.get('/lobby', game.lobby);
app.get('/lobby/join/:id', game.joinmatch);
app.get('/match/'); //decide who will go fist
app.get('/match/:id/createunits', game.createunits); //how the units the user can create
app.get('/match/:id/savecreatedunits', game.savecreatedunits); //save the units created
*/

//select who will go first to to select regions
//inform the user who can go first.
//show the user the map
//save the regions user selected.
//select who will take a turn first
//inform the user.
//user makes a move (region to attack or retriret to, units to use) sends to backend
//calcuate the damage
//send the response to the attacker of outcome.
//send the response to the defender of outcome.
//Check win conditions


app.get('')

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
