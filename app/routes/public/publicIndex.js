/*
*   app/routes/public/index.js - Our public routes (or 'reducer' as we grow)
*/
const authHelper = new (require('../../auth/authHelper.js'))();
const sampleViewHandler = new (require('../../controllers/public/viewHandler.sample.js'))();
const profileHandler = new (require('../../controllers/public/profileHandler.js'))();
    
module.exports = function (app) {
   
    app.route('/')
        .get(function(req, res) { res.send('Hello World!') });
    
    app.route('/login')
        .get(function(req, res) { res.send('Use /auth/github or /auth/google to authenticate') });
    
    app.route('/logout')
        .get(function(req, res) { req.logout(); res.redirect('/login') });

    app.route('/profile')
        .get(authHelper.ensureAuthenticated, profileHandler.showProfile);
    
    app.route('/admin-only-url')
        .get(authHelper.ensureAdmin, profileHandler.showProfile);
    
    app.route('/s/:param')
        .get(sampleViewHandler.showDefault);
    
};