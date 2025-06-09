import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();

const server = http.createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('chat message', (message) => {
    io.emit('chat message', message);
  });
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('/public/index.html');
});

server.listen(8000, () => {
  console.log(`Running PORT: http://localhost:8000`);
});
