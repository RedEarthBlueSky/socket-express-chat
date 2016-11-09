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

**Emitting events**
The main idea behind Socket.IO is that you can send and receive any events you want, with any data you want. Any objects that can be encoded as JSON will do, and binary data is supported too.

Let’s make it so that when the user types in a message, the server gets it as a chat message event. The scripts section in index.html should now look as follows:
