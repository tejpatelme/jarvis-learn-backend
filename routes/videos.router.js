const { Router } = require("express");
const { Video } = require("../models/video.model");
const { videoLibrary } = require("../data/video-data");

const router = Router();

router.post("/seed", async (req, res) => {
  try {
    const videos = await Video.create(videoLibrary);

    res.json({ success: true, videos });
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const videos = await Video.find({});

    res.json(videos);
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
});

module.exports = router;
