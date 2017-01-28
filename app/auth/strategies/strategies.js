/*
*   app/auth/strategies.js - A reducer for all of our strategies
*                            It will be nice when we can Import { * }
*/
const GoogleStrategy = require('./impl/google.js');
const GithubStrategy = require('./impl/github.js');

module.exports = (app, db) => {
    
    GoogleStrategy(app, db);
    GithubStrategy(app, db);
    
};