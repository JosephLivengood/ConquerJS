/*
*   app/routes/api/index.js - Our API routes (or 'reducer' as we grow)
*/
const authHelper = new (require('../../auth/authHelper.js'))();
const helloHandler = new (require('../../controllers/api/helloHandler.sample.js'))();

module.exports = function (app) {
    
    app.route('/_api')
        .get(function(req, res) {
            res.send('API Index')
        });
    
    app.route('/_api/hello')
        .get(helloHandler.sendWelcome);
    
};