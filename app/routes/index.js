/*
*   app/routes/index.js - Routing 'reducer'
*/
const apiRoutes = require('./api/apiIndex.js');
const publicRoutes = require('./public/publicIndex.js');
const errorMiddleware = require('./errorMiddleware.js');

module.exports = (app, db) => {
    
    apiRoutes(app, db);
    publicRoutes(app, db);
    errorMiddleware(app, db);
    
};