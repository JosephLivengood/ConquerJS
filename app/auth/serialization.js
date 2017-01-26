/*
*   app/auth/serialization.js - Define how we will serialize our users
*/
const passport = require('passport');

module.exports = (db) => {
    
    passport.serializeUser( (user, done) => {
        done(null, user.id);
    });
    
    passport.deserializeUser( (id, done) => {
        db.collection('users').findOne(
            {id},
            (err, doc) => {
                done(null, doc);
            }
        );
    });
    
};
