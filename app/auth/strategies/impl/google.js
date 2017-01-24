/*
*   app/auth/strategies/google.js - Define the Google strategy for authentication
*/
const config = require('../../../../config.json');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = (app, db) => {
 
    passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: "http://localhost:8080/auth/google/callback"
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
    
    app.route('/auth/google')
        .get(passport.authenticate('google', { scope: ['profile','email'] }));
        
    app.route('/auth/google/callback')
        .get(passport.authenticate('google', { failureRedirect: config.login_fail_redirect }),
            (req, res) => { res.redirect(config.login_success_redirect) });
    
}