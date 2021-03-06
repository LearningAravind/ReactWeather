var express = require('express');
//Create our app
var app = express();
// const PORT = process.env.PORT || 3000;
var port = 3000;

app.use(function (req, res, next) {
  debugger;
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(port, function(){
  console.log('Express server is up on port ' + port);
});
