/*
*   app/auth/passport.js - Initialize passport and call strategies to load all strategies to be used
*/
const passport = require('passport');
const session = require('express-session');

const strategies = require('./strategies/strategies.js');
const serialization = require('./serialization.js');

module.exports = (app, db) => {
    
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true
    }));
    
    app.use(passport.initialize());
    
    app.use(passport.session());
    
    strategies(app, db);
    
    serialization(db);
    
};