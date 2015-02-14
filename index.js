var express = require('express');

// export as module to run the server from grunt
var app = module.exports = express();
var path = require('path');
var config = require("./config");

app.disable("x-powered-by");

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');

app.use(require("body-parser").urlencoded({
  extended: false
}))

require("./views")(app);
require("./routes")(app);

// Set server port. We are using grunt to run the server.
// Uncomment this line if you don't.
//app.listen(config.port);