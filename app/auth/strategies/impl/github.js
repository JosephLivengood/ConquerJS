/*
*   app/auth/strategies/github.js - Define the Github strategy for authentication
*/
const config = require('../../../../config.json');
const UserModel = require('../../userModel.js');
const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;

module.exports = (app, db) => {
    
    const userModel = new UserModel(db);
    
    passport.use(new GithubStrategy({
            clientID: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            callbackURL: config.app_url + "/auth/github/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            return userModel.userLoggedIn(profile, done);
        }
    ));
    
    app.route('/auth/github')
        .get(passport.authenticate('github'));
        
    app.route('/auth/github/callback')
        .get(passport.authenticate('github', { failureRedirect: config.login_fail_redirect }),
            (req, res) => { res.redirect(config.login_success_redirect); });
    
};