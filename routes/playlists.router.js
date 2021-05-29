const { Router } = require("express");
const {
  createNewPlaylist,
  getUserPlaylists,
} = require("../controllers/playlists.controller");
const { verifyToken } = require("../middlewares/auth");

const router = Router();

router.route("/").get(verifyToken, getUserPlaylists);

router.route("/create-playlist").post(verifyToken, createNewPlaylist);

module.exports = router;
