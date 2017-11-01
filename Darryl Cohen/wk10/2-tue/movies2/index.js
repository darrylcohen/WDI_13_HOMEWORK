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
  request(`http://omdbapi.com/?s=${req.query.title}&apikey=2f6435d9`, function (error, resp, body) {
    var data = JSON.parse(resp.body)
    response.render('details', {search: data.Search});
  });
});

app.get('/details/:title', function(req, response) {
  var title = req.params.title
  request(`http://omdbapi.com/?t=${title}&apikey=2f6435d9`, function (error, resp, body) {
    var data = JSON.parse(resp.body)
    response.render('show', {pic: data.Poster});
  });
});
app.listen(PORT);
