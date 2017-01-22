/*
*   app/auth/strategies/github.js - Define the Github strategy for authentication
*/
const config = require('../../../../config.json');
const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;

module.exports = function (app) {
    
    passport.use(new GithubStrategy({
            clientID: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            callbackURL: "http://localhost:8080/auth/github/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            return done(null, profile);
        }
    ));
    
    app.route('/auth/github')
        .get(passport.authenticate('github'));
        
    app.route('/auth/github/callback')
        .get(passport.authenticate('github', { failureRedirect: config.login_fail_redirect }),
            function(req, res) { res.redirect(config.login_success_redirect) });
    
}