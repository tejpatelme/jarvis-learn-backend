if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const express = require("express");
const { connectToDatabase } = require("./db/dbConnection");

const PORT = process.env.PORT | 3000;
const app = express();

connectToDatabase();

app.get("/", (req, res) => {
  res.send("Backend API for jarvis learn video library app");
});

app.listen(PORT, () => console.log("Server started on port ", PORT));
