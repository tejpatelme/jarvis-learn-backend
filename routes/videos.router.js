const { Router } = require("express");
const {
  seedVideosDataToDatabase,
  fetchAllVideos,
} = require("../controllers/videos.controller");

const router = Router();

router.post("/seed", seedVideosDataToDatabase);

router.get("/", fetchAllVideos);

module.exports = router;
