var http = require('http');
var fs = require("fs");
var path = require("path");
var cors = require('cors');
var express = require('express');
var app = express();
var port = 3000;

//app.use(cors())

app.get('/', cors(), function (req, res, next) {
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js',function(req, res){
    res.sendFile(path.join(__dirname,'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js'))
})


app.listen(port, function () {
      console.log('CORS-enabled web server listening on port '+port)
})
