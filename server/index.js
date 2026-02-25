const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const roomLists = {};

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("joinRoom", (data) => {
    if (!roomLists[data.roomCode]) {
      socket.emit("error", "Room does not exist.");
      return;
    }
    socket.join(data.roomCode);
    socket.emit("roomJoined", data);
    console.log(`User ${data.playerName} joined room: ${data.roomCode}`);
  });

  socket.on("createRoom", (data) => {
    const newRoomCode = generateRoomCode();
    roomLists[newRoomCode] = { ...data, roomCode: newRoomCode };
    socket.join(newRoomCode);
    socket.emit("roomJoined", { ...data, roomCode: newRoomCode });
    console.log(`User ${data.playerName} created room: ${newRoomCode}`);
  });

  socket.on("disconnect", () => {
    io.emit("userDisconnected", socket.id);
    console.log(`User disconnected: ${socket.id}`);
  });
});

const generateRoomCode = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
