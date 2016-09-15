var express = require('express');
var app = express();
var parameters = require('./parameters.json');

var PORT = parameters.PORT || 8000;

app.use('/assets', express.static(__dirname + '/www/assets'));

app.all('/*', function(req, res) {
    res.sendfile('index.html', { root: __dirname + '/www/' });
});

app.listen(PORT, function() {
    console.log('LISTENING IN PORT: '+PORT)
});
