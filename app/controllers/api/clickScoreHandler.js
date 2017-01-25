/*
*   app/controllers/api/clickScoreHandler.js - A sample API file to show use of controllers with this random scoring system
*/
function ClickScore (db) {
    
    const user = db.collection('users');
    
    this.getScore = (req, res) => {
        user.findOne(
            {id: req.user.id},
            (err, doc) => {
                res.json({click_score: doc.click_score});
            }
        );
    };
    
    this.incScore = (req, res) => {
        user.findAndModify(
            {id: req.user.id},
            {},
            {$mul: {click_score: 2}},
            {new: true},
            (err, doc) => {
                res.json({click_score: doc.value.click_score});
            }
        );
    };
    
    this.resetScore = (req, res) => {
        user.findAndModify(
            {id: req.user.id},
            {},
            {$set: {click_score: 0}},
            {new: true},
            (err, doc) => {
                res.json({click_score: doc.value.click_score});
            }
        );
    };
    
}

module.exports = ClickScore;