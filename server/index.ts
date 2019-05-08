import socketIo from "socket.io";
import { green, blue } from "ansi-colors";
import { Events } from "../shared/events";

const io = socketIo();

io.on("connection", socket => {
  console.log(blue(`User ${socket.id} connected!`));

  for (const [key, value] of Object.entries(io.sockets.sockets)) {
    if (socket.id !== key) {
      value.emit(Events.UserConnected, socket.id);
    }
  }

  socket.on("disconnect", () => {
    console.log(blue(`User ${socket.id} disconnected!`));
    io.emit(Events.UserDisconnected, socket.id);
  });
});

io.listen(3030);

console.clear();
console.log(green("Server is listening on port 3030"));
