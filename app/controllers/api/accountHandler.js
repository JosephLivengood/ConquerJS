/*
*   app/controllers/api/accountHandler.js - API to handle account info/changes
*/
function ClickScore (db) {
    
    const user = db.collection('users');
    
    this.getMe = (req, res) => {
        user.findOne(
            {id: req.user.id},
            (err, doc) => {
                res.json({user: doc});
            }
        );
    };
    
}

module.exports = ClickScore;