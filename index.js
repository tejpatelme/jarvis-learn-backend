if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./db/dbConnection");
const { routeNotFound, errorHandler } = require("./middlewares");
const { videosRouter, usersRouter, playlistsRouter } = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

connectToDatabase();

app.get("/", (req, res) => {
  res.send("Backend API for jarvis learn video library app");
});

app.use("/videos", videosRouter);
app.use("/users", usersRouter);
app.use("/playlists", playlistsRouter);

/**
 * 404 Router Handler.
 * Do not move, this needs to be the last route.
 */
app.use(routeNotFound);

/**
 *Error Handler
 */
app.use(errorHandler);

app.listen(PORT, () => console.log("Server started on port ", PORT));
