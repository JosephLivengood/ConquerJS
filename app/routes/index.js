/*
*   app/routes/index.js - Routing 'reducer'
*/
const apiRoutes = require('./api/index.js');
const publicRoutes = require('./public/index.js');
const errorMiddleware = require('./errorMiddleware.js');

module.exports = function (app) {
    
    apiRoutes(app);
    publicRoutes(app);
    errorMiddleware(app);
    
};