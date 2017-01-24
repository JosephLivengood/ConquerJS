/*
*   app/routes/api/index.js - Our API routes (or 'reducer' as we grow)
*/
const AuthHelper = require('../../auth/authHelper.js');
const HelloHandler = require('../../controllers/api/helloHandler.sample.js');

module.exports = function (app, db) {
    
    const authHelper = new AuthHelper(db);
    const helloHandler = new HelloHandler(db);
    
    app.route('/_api')
        .get(function(req, res) {
            res.send('API Index')
        });
    
    app.route('/_api/hello')
        .get(helloHandler.sendWelcome);
    
};