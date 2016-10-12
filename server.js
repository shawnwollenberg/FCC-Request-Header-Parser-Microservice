//get the IP address, language and operating system for my browser
//{"ipaddress":"208.85.168.8","language":"en-US","software":"Windows NT 10.0; Win64; x64"}
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('For this exercise go to /whoami');
});

app.get('/whoami', function (req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.json({
      'ipaddress':ip,
      'language': req.headers['accept-language'].split(',')[0],
      //'software': req.headers['user-agent']
      //returns - Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36
      'software': req.headers['user-agent'].split(') ')[0].split(' (')[1] 
      //all to left of ) and all to right of (
  });
});

app.listen(8080, function () {
  console.log('app listening on port 8080!');
});