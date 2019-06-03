<<<<<<< HEAD
var express = require('express')
var app = express()



app.get('/', function (req, res) {
    res.send('Hello World!')
  })

app.get('/doug', function (req, res) {
    res.send('Eaemen!')
})

app.get('/batata', function (req, res) {
    res.send('!!!!!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
=======
var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.get("/doug", function(req, res) {
  res.send("Eaemen!");
});

app.get("/batata", function(req, res) {
  res.send("!!!!!");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
>>>>>>> 0865a02d00b757ceb92576f20470edafc843c3d9
