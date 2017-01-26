/*
*   app/routes/errorMiddleware.js - To contain any error middleware within routing such as 404's
*/
module.exports = (app, db) => {
        
    app.use( (req, res) => {
        res.status(400);
        res.render('404', {title: '404: File Not Found'});
    });

    app.use( (error, req, res, next) => {
        res.status(500);
        res.render('500', {title:'500: Internal Server Error', error});
    });
    
};