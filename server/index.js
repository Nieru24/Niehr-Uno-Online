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

// Unique 6-character generator for roomCode
const generateRoomCode = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code;
  do {
    code = Array.from({ length: 6 }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join("");
  } while (roomLists[code]); // retry on collision
  return code;
};

// Socket.IO connection handler
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.emit("updateRoomList", Object.values(roomLists));

  socket.on("joinRoom", (data) => {
    const room = roomLists[data.roomCode];

    // Validate player name
    if (!data.playerName || data.playerName.trim() === "") {
      socket.emit("error", "Please enter a name.");
      return;
    }

    // Validate room existence
    if (!room) {
      socket.emit("error", "Room does not exist.");
      return;
    }

    // Validate room capacity
    if (room.players.length >= room.maxPlayers) {
      socket.emit("error", "Room is full.");
      return;
    }

    // Validate player not joined already
    if (room.players.some((p) => p.id === socket.id)) {
      socket.emit("error", "Ey, you are already in this room.");
      return;
    }

    room.players.push({
      id: socket.id,
      name: data.playerName,
      isHost: false,
    });

    socket.join(data.roomCode);
    socket.emit("roomJoined", { roomCode: data.roomCode });
    console.log(`User ${socket.id} joined room ${data.roomCode}`);

    // Broadcast updated room list to all clients
    io.emit("updateRoomList", Object.values(roomLists));
  });

  socket.on("createRoom", (data) => {
    // Validate player name
    if (!data.playerName || data.playerName.trim() === "") {
      socket.emit("error", "Player name cannot be empty.");
      return;
    }

    const newRoomCode = generateRoomCode();

    roomLists[newRoomCode] = {
      roomCode: newRoomCode,
      roomName: data.playerName,
      players: [{ id: socket.id, name: data.playerName, isHost: true }],
      maxPlayers: 10,
    };

    socket.join(newRoomCode);
    socket.emit("roomJoined", { roomCode: newRoomCode });

    // Broadcast updated room list to all clients
    io.emit("updateRoomList", Object.values(roomLists));
    console.log(roomLists);
  });

  socket.on("requestRoomList", () => {
    socket.emit("updateRoomList", Object.values(roomLists));
  });

  socket.on("leaveRoom", (data) => {
    const room = roomLists[data.roomCode];

    if (room) {
      room.players = room.players.filter((p) => p.id !== socket.id);
      socket.leave(data.roomCode);
      console.log(`User ${socket.id} left ${data.roomCode}'s room`);
    }
  });

  socket.on("disconnect", () => {
    for (const roomCode in roomLists) {
      const room = roomLists[roomCode];
      room.players = room.players.filter((p) => p.id !== socket.id);

      if (room.players.length === 0) {
        delete roomLists[roomCode];
      }
    }
    io.emit("updateRoomList", Object.values(roomLists));
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
