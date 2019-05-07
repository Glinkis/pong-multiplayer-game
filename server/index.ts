import express from "express";
import path from "path";

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

app.listen("3030", () => {
  console.log("Listening on port 3030");
});
