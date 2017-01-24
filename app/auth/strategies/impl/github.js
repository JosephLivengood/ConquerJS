/*
*   app/auth/strategies/github.js - Define the Github strategy for authentication
*/
const config = require('../../../../config.json');
const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;

module.exports = (app, db) => {
    
    passport.use(new GithubStrategy({
            clientID: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            callbackURL: config.app_url + "/auth/github/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            db.collection('users').findAndModify(
                {id: profile.id},
                {},
                {$setOnInsert:{
                    id: profile.id,
                    name: profile.displayName || 'John Doe',
                    photo: profile.photos[0].value || '/resources/profile/default.jpg',
                    email: profile.emails[0].value || '',
                    created_on: new Date(),
                    provider: profile.provider || '',
                    role: 'user',
                }},
                {upsert:true, new: true},
                (err, doc) => {
                    return done(null, doc.value);
                }
            );
        }
    ));
    
    app.route('/auth/github')
        .get(passport.authenticate('github'));
        
    app.route('/auth/github/callback')
        .get(passport.authenticate('github', { failureRedirect: config.login_fail_redirect }),
            (req, res) => { res.redirect(config.login_success_redirect) });
    
}