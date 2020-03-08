module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/poems')
    });
    app.use('/authors', require('./author.routes.js'));
    app.use('/poems', require('./poem.routes.js'));

    // app.use(function (req, res) {
    //     if (!res.headersSent) {
    //         res.status(404).render('404')
    //     }
    // })
};
