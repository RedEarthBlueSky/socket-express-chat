###Integrating Socket.IO

Socket.IO is composed of two parts:

A server that integrates with (or mounts on) the Node.JS HTTP Server: socket.io

A client library that loads on the browser side: socket.io-client

During development, socket.io serves the client automatically.

To install the module and its dependencies
npm install --save socket.io


In index.html add tsnippet before </body>:

<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io();
</script>

This loads the socket.io-client, which exposes a io global, and then connect.

As not specifying URL when call io(), it connects to host that serves page.

####Emitting event
In Socket.IO send and receive any events, with any data objects, encoded as JSON, with binary data supported.

Add in html scripts section; so when the user types in a message, the server gets it as a 'chat message' event.
<script src="/socket.io/socket.io.js"></script>
<script src="http://code.jquery.com/jquery-1.11.1.js"></script>
<script>
  var socket = io();
  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
</script>

And in index.js we print out the chat message event:

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

####Broadcasting
Emit events from the server to the rest of the users.  In order to send an event to everyone - all connected clients from the server, use Socket.IO io.emit:

io.emit('some event', { for: 'everyone' });


**From server** send message to everyone, including sender.

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

**Client side** when we capture a chat message event we’ll include it in the page. The total client-side JavaScript code now amounts to:

<script>
  var socket = io();
  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
</script>

###Fini!

Open a couple of windows and check it out.
