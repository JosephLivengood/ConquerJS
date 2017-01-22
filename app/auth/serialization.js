/*
*   app/auth/serialization.js - Define how we will serialize our users
*/
const passport = require('passport');
const mongo = require('mongodb').MongoClient;
const CONNECTION_STRING = process.env.DATABASE; //'mongodb://admin:password@ds117109.mlab.com:17109/boilerplate';

module.exports = function () {
    
    passport.serializeUser(function(user, done) {
        mongo.connect(process.env.DATABASE,function(err,db) {
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
                    db.close();
                }
            );
        });
    });
    
    passport.deserializeUser(function(id, done) {
        mongo.connect(process.env.DATABASE,function(err,db) {
            db.collection('users').findOne(
                {id: id},
                {},
                function(err, doc) {
                    done(null, doc);
                    db.close();
                }
            );
        });
    });
    
}