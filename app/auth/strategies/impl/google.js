/*
*   app/auth/strategies/google.js - Define the Google strategy for authentication
*/
const config = require('../../../../config.json');
const UserModel = require('../../userModel.js');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = (app, db) => {
    
    const userModel = new UserModel(db);
 
    passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: config.app_url + "/auth/google/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            return userModel.userLoggedIn(profile, done);
        }
    ));
    
    app.route('/auth/google')
        .get(passport.authenticate('google', { scope: ['profile','email'] }));
        
    app.route('/auth/google/callback')
        .get(passport.authenticate('google', { failureRedirect: config.login_fail_redirect }),
            (req, res) => { res.redirect(config.login_success_redirect); });
    
};