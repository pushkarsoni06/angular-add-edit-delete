var express = require('express')
var app = express()
 console.log("Hiiiiiiiiiiiii");
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)