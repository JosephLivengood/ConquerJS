/*
*   server.js - Entry point for our site
*/
const express       = require('express');
const app           = express();
const port          = process.env.PORT || 8080;
const bodyParser    = require('body-parser');
const dotenv        = require('dotenv');

const routes        = require('./app/routes/index.js');
const auth          = require('./app/auth/passport.js');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', './public/views')
app.set('view engine', 'pug');
dotenv.load();

/*Load Authentication*/
auth(app);

/*Load routing*/
routes(app);

/*Start Server*/
app.listen(port, function() {
    console.log("App listening on port " + port);
});

module.exports = app; //For testing