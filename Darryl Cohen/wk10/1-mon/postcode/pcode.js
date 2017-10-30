var http = require('http');
var fs = require('fs');

// console.log(data.toString() ); if dont have 'utf-8'
var csvJSON = function (csv){

  var lines=csv.split("\n");
  var result = [];
  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){
	    console.log(i);
        var obj = {};
	  var currentline=lines[i].split(",");

    if (lines[i] !== "") {
  	  for(var j=0;j<headers.length;j++){
        var text = currentline[j].replace(/"/g,'').replace(/[\n\r]+/g, '');
        var head = headers[j].replace(/"/g,'').replace(/[\n\r]+/g, '')

  		  obj[head] = text
  	  }
    }
	  result.push(obj);
  }
  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}

var app = function(request, response) {
    fs.readFile('Aus.csv', 'utf-8' ,function(err, data){
      var json = csvJSON(data)
      response.write(json);
      response.end();
    })
}

var server = http.createServer( app );
server.listen(8888);
