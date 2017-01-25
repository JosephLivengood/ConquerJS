/*
*   app/auth/userModel.js - To handle a uniform user model with multiple strategies
*/
const config = require('../../config.json');

function UserModel (db) {
    
    /*
    *   userLoggedIn   -  Takes profile and callback as arg from strategies.
    *                     $setOnInsert: for brand new accounts
    *                     $set: for all users when authed
    */
    this.userLoggedIn = (profile, done) => {
        db.collection('users').findAndModify(
            {id: profile.id},
            {},
            {$setOnInsert:{
                id: profile.id,
                name: profile.displayName || 'John Doe',
                photo: profile.photos[0].value || '/resources/profile/default.jpg',
                email: profile.emails[0].value || '',
                created_on: new Date(),
                last_login: new Date(),
                provider: profile.provider || '',
                role: 'user',
            },$set:{
                last_login: new Date()
            }},
            {upsert:true, new: true},
            (err, doc) => {
                return done(null, doc.value);
            }
        );
    };
    
}

module.exports = UserModel;