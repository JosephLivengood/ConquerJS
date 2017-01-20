/*
*   app/routes/api/index.js - Our API routes (or 'reducer' as we grow)
*/
module.exports = function (app) {
    
    app.route('/_api/')
        .get(function(req, res) {
            res.send('Hello API!')
        });
    
};