/*
*   app/routes/public/index.js - Our public routes (or 'reducer' as we grow)
*/
module.exports = function (app) {
     
    app.route('/')
        .get(function(req, res) {
            res.send('Hello World!')
        });
    
};