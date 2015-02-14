module.exports = function(app) {
  app.get('/:page', function(req, res, next) {
    var page = req.params.page;
    res.render(page);
  });

  app.get('*', function(req, res, next) {
    var err = new Error();
    err.status = 404;
    return next(err);
  });

  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error.html', {
        error: err.status
    });
  });
}