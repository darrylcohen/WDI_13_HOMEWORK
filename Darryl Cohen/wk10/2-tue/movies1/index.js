var express = require('express');
var request = require('request');

var app = express();
const PORT = 8888;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index')
});
app.get('/details', function(req, response) {

  request(`http://omdbapi.com/?t=${req.query.title}&apikey=2f6435d9`, function (error, resp, body) {
    var data = JSON.parse(resp.body)
    response.render('details', {pic: data.Poster});
  });

  // response.render('details', {title: req.query.title});



});
app.listen(PORT);
