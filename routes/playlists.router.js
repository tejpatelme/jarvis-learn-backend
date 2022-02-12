const { Router } = require("express");
const {
  createNewPlaylist,
  getUserPlaylists,
  addOrRemoveVideo,
  deletePlaylist,
} = require("../controllers/playlists.controller");
const { verifyToken } = require("../middlewares/auth");

const router = Router();

router.route("/").get(verifyToken, getUserPlaylists);

router.route("/new").post(verifyToken, createNewPlaylist);

router
  .route("/:playlistId")
  .post(verifyToken, addOrRemoveVideo)
  .delete(verifyToken, deletePlaylist);

module.exports = router;
