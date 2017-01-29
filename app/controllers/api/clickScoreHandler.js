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
            [],
            {$inc: {click_score: Math.floor(Math.random()*10)}},
            {new: true},
            (err, doc) => {
                res.json({click_score: doc.value.click_score});
            }
        );
    };
    
    this.resetScore = (req, res) => {
        user.findAndModify(
            {id: req.user.id},
            [],
            {$set: {click_score: 1}},
            {new: true},
            (err, doc) => {
                res.json({click_score: doc.value.click_score});
            }
        );
    };
    
    this.getTopScorers = (req, res) => {
        user.find(
            {click_score: {$gt: 2}},
            {name: 1, click_score: 1, _id: 0}
        ).sort({click_score: -1}).limit(10).toArray((err, doc) => {
            res.json(doc);
        });
    };
    
}

module.exports = ClickScore;
