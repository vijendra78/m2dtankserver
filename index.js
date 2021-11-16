
//Local
////io = require('socket.io')(process.env.PORT || 52300)

////console.log('server has started')

//Server
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


http.listen(process.env.PORT || 8080, function () {
    console.log('listening on: 8080');
});