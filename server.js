var express = require('express');
var index = require('./routes/index');
var favList = require('./routes/favList');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');

var config = { database: "giphy" };
var pool = new pg.Pool(config);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/', index);
app.use('/favorites', favList);


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

app.get('/favGif', function(req, res){
  pool.connect(function( err, client, done ){
    if( err ){
      console.log("Error connecting to Server:", err );
      res.sendStatus( 500 );
      done();
    }
    else {
      console.log( 'db connect', req.body);
      client.query( "SELECT * FROM test",
        function(err, result) {
          done();
          if (err) {
            console.log("Error querying DB", err);
            res.sendStatus(500);
          } else {
            console.log("Got info from DB", result.rows);
            res.send(result.rows);
          }});
    };
  }
  );
});





var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Server listening on port', server.address().port);
});
