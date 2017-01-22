/*
*   app/auth/strategies/google.js - Define the Google strategy for authentication
*/
const config = require('../../../../config.json');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = function (app) {
 
    passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: "http://localhost:8080/auth/google/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            return done(null, profile);
        }
    ));
    
    app.route('/auth/google')
        .get(passport.authenticate('google', { scope: ['profile','email'] }));
        
    app.route('/auth/google/callback')
        .get(passport.authenticate('google', { failureRedirect: config.login_fail_redirect }),
            function(req, res) { res.redirect(config.login_success_redirect) });
    
}