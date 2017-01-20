/*
*   app/routes/public/index.js - Our public routes (or 'reducer' as we grow)
*/
const path = process.cwd();
const ViewHandler = require(path + '/app/controllers/public/viewHandler.sample.js');
    
module.exports = function (app) {
    
    const sampleViewHandler = new ViewHandler();
   
    app.route('/')
        .get(function(req, res) {
            res.send('Hello World!')
        });
    
    app.route('/s/:param')
        .get(sampleViewHandler.showDefault);
    
};