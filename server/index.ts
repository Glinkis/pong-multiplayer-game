import socketIo from "socket.io";
import { Events } from "../shared/events";

const io = socketIo();

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

io.listen(3030);
