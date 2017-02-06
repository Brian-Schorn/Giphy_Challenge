var express = require('express');
var index = require('./routes/index');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');

var config = { database: "giphy" };
var pool = new pg.Pool(config);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/', index);


app.post('/favGif', function(req, res){
  pool.connect(function( err, client, done ){
    if( err ){
      console.log("Error connecting to Server:", err );
      res.sendStatus( 500 );
      done();
    }
    else {
      console.log( 'db connect', req.body);
      client.query( "INSERT INTO test (url, commentfield) values ( $1, $2 )", [ req.body.url, req.body.comment ] );
      done();
      res.sendStatus( 200 );
    }
  });
});





var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Server listening on port', server.address().port);
});
