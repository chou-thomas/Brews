var express = require('express');
var path = require('path');
var app = express();

var bodyParser = require('body-parser');

// allowing us to actually use our body-parser
app.use(bodyParser.json());

// communitcating with our static folder (angular code)
app.use(express.static(__dirname + "/client"));

// getting to the mongoose file
require('./server/config/mongoose.js')
// getting to the routes file
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// setting the port to a var port loading it on 8000
var port = Number(process.env.PORT || 8000);
app.listen(port);
console.log("listening on port 8000")
