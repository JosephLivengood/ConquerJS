/*
*   app/controllers/public/profileHandler.js - Handler for profile logic
*/
function ProfileHandler () {
    
    this.showProfile = (req, res) => {
        const user = JSON.stringify(req.user);
        res.render('profile', {user:user});
    };
    
}

module.exports = ProfileHandler;