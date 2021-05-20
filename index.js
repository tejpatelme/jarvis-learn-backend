const express = require("express");

const PORT = process.env.PORT | 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Backend API for jarvis learn video library app");
});

app.listen(PORT, () => console.log("Server started on port ", PORT));
