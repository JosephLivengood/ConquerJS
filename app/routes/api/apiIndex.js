/*
*   app/routes/api/index.js - Our API routes (or 'reducer' as we grow)
*/
const AuthHelper = require('../../auth/authHelper.js');
const ClickScoreHandler = require('../../controllers/api/clickScoreHandler.js');

module.exports = (app, db) => {
    
    const authHelper = new AuthHelper(db);
    const clickScoreHandler = new ClickScoreHandler(db);
    
    app.route('/_api')
        .get( (req, res) => {
            res.send('API Index');
        });
    
    app.route('/_api/click-score')
        .get(authHelper.ensureAuthenticated, clickScoreHandler.getScore)
        .post(authHelper.ensureAuthenticated, clickScoreHandler.incScore)
        .delete(authHelper.ensureAuthenticated, clickScoreHandler.resetScore);
    
};