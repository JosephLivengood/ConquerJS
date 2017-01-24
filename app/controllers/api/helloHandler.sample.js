/*
*   app/controllers/api/sampleAPI.js - A sample API file to show use of controllers
*/
function HelloHandler (db) {
    
    this.sendWelcome = (req, res) => {
        const welcomeTo = 'World';
        const welcome = {
            Hello: welcomeTo
        };
        res.json(welcome);
    };
    
}

module.exports = HelloHandler;