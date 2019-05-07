import express from "express";
import http from "http";
import socketIo from "socket.io";
import path from "path";
import { Events } from "../shared/events";

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, "../dist")));

io.on("connection", socket => {
  console.log(`User ${socket.id} connected!`);

  for (const [key, value] of Object.entries(io.sockets.sockets)) {
    if (socket.id !== key) {
      value.emit(Events.UserConnected, socket.id);
    }
  }

  socket.on("disconnect", () => {
    console.log(`User ${socket.id} disconnected!`);
    io.emit(Events.UserDisconnected, socket.id);
  });
});

server.listen(3030, () => {
  console.log("Listening on port", 3030);
});
