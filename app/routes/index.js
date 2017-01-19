/*
*   app/routes/index.js - Entry point for our routing
*/

module.exports = function (app) {
    
    app.route('/')
        .get(function(req, res) {
            res.send('Hello World!')
        });
    
};