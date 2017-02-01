/*
*   app/controllers/public/viewHandler.sample.js - A sample controller
*/
function ViewHandler (db) {
    
    /*  
    *   Potential use: 
    *       Once you retirve an object from db based on param,
    *       determine which template to render keeping all logic here.
    *       Keeping all logic out of the routing files and not needing
    *       an API call on the page just to load the main info needed.
    */
    this.showDefault = (req, res) => {
        const paramFromURL = req.params.param;
        const title = 'default page on /'+paramFromURL;
        res.render('sample/default', {title});
    };

}

module.exports = ViewHandler;