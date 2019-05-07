import io from "socket.io-client";
import { Events } from "../shared/events";

io("localhost:3030")
  .on("connect", () => {
    console.log("Connected to server!");
  })
  .on("disconnect", () => {
    console.log("Disonnected from server!");
  })
  .on("reconnect", () => {
    console.log("Reconnected to server!");
  })
  .on(Events.UserConnected, (id: string) => {
    console.log(`User ${id} connected!`);
  })
  .on(Events.UserDisconnected, (id: string) => {
    console.log(`User ${id} disconnected!`);
  });
