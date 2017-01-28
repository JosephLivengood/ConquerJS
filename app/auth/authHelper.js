/*
*   app/auth/authHelper.js - A helper primarily for our routing to check for criteria before doing logic/responding
*/
const config = require('../../config.json');

function AuthHelper (db) {
    
    this.ensureAuthenticated = (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect(config.unauthenticated_redirect);
    };
    
    this.ensureAdmin = (req, res, next) => {
        if (req.isAuthenticated() && req.user.role === 'admin') {
            return next();
        }
        res.redirect(config.unauthenticated_redirect);
    };
    
}

module.exports = AuthHelper;