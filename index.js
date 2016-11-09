//  Express initializes app to be the function handler that you can supply to
//  an http server...  as in http
const app = require('express')();
const http = require('http').Server(app);  // http server

//  initialize a new instance of socket.io by passing the http - server object
const io = require('socket.io')(http);

// refactor route handler to use sendFile:
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

//  listen on the connection even for incoming socket and log to console
io.on('error', function(socket){
  console.log('Error connecting');
});
io.on('connection', function(socket){
  console.log('User connected');
  socket.on('disconnect', function () {
    console.log('User disconnected');
  })
});

//  make the http server listen on port 3000
http.listen(3000, function () {
  console.log('listening on *:3000');
})
