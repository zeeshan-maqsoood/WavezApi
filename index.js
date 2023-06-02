const express = require('express');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
const server = require('http').createServer(app);
const io = socketIO(server);
app.use(cors());
io.on('connection', (socket) => {
  console.log('A user connected');
app.get("/",(req,res)=>{
res.send({message:"Api Calls"})
})
  // Handle client message event
  socket.on('message', (message) => {
    console.log('Received message:', message);
    // Broadcast the message to all connected clients
    io.emit('message', message);
  });

  // Handle disconnection event
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
const port = 3003; // Set the desired port number
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
