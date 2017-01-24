/*
*   app/auth/serialization.js - Define how we will serialize our users
*/
const passport = require('passport');

module.exports = function (db) {
    
    passport.serializeUser(function(user, done) {
        db.collection('users').findAndModify(
            {id: user.id},
            {},
            {$setOnInsert:{
                id: user.id,
                name: user.displayName || 'John Doe',
                photo: user.photos[0].value || '/resources/profile/default.jpg',
                email: user.emails[0].value || '',
                created_on: new Date(),
                provider: user.provider || '',
                role: 'user',
            }},
            {upsert:true, new: true},
            function(err, doc) {
                done(null, doc.value.id);
            }
        );
    });
    
    passport.deserializeUser(function(id, done) {
        db.collection('users').findOne(
            {id: id},
            {},
            function(err, doc) {
                done(null, doc);
            }
        );
    });
    
}
