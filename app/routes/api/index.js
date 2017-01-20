/*
*   app/routes/api/index.js - Our API routes (or 'reducer' as we grow)
*/
const path = process.cwd();
const HelloHandler = require(path + '/app/controllers/api/helloHandler.sample.js');

module.exports = function (app) {
    
    const helloHandler = new HelloHandler();
    
    app.route('/_api')
        .get(function(req, res) {
            res.send('API Index')
        });
    
    app.route('/_api/hello')
        .get(helloHandler.sendWelcome);
    
};