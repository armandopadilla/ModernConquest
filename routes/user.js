/**
 * Sign up page 
 */
exports.signup = function(req, resp)
{
    //Pull the branchs from the db.
    
    //Store in reddis.
    
    resp.render('signup');
}


/**
 * Save the data for the new user.
 */
exports.saveNewUser = function(req, resp)
{
    //Fetch all the data.
    
    //Validate all is ok.
    
    //Clean up the data.
    
    //Save to db.
    
}


exports.login = function(req, resp)
{
    resp.render('login');
}


exports.auth = function 