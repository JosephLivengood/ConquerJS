/*
*   server.js - Entry point for our site
*/
const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const dotenv        = require('dotenv');
const mongo         = require('mongodb').MongoClient;
const port          = process.env.PORT || 8080;

const routes        = require('./app/routes/index.js');
const auth          = require('./app/auth/passport.js');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', './public/views');
app.set('view engine', 'pug');
dotenv.load();

/*Connect to database*/
mongo.connect(process.env.DATABASE, (err, db) => {
    if(err) {
        console.log('Database error: ' + err);
    } else {
        console.log('Successful database connection');
        
        /*Load Authentication*/
        auth(app, db);

        /*Load routing*/
        routes(app, db);

        /*Start Server*/
        app.listen(port, () => {
            console.log('App listening on port ' + port);
            app.emit("appStarted");
        });
    }
});

module.exports = app; //For testing