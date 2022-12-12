const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app); //Way to create server instance with express

const io = new Server(server, {
  cors: {
    //If there are issues with connecting to Socket.io then it is possible to be cors related.
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
}); //Ways to create anything related to Socket io

io.on("connection", (socket) => {
  console.log(`a user connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User id: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    console.log(data);
    socket.to(data.room).emit("receive_message", data);
  });
});

server.listen(3002, () => {
  console.log("Server is running on port 3002");
});
