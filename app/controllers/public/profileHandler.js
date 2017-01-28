/*
*   app/controllers/public/profileHandler.js - Handler for profile logic
*/
function ProfileHandler (db) {
    
    this.showProfile = (req, res) => {
        const user = req.user;
        res.render('profile', {user});
    };
    
}

module.exports = ProfileHandler;