const { Video } = require("../models/video.model");
const { videoLibrary } = require("../data/video-data");

exports.seedVideosDataToDatabase = async (req, res) => {
  try {
    const videos = await Video.create(videoLibrary);

    res.json({ success: true, videos });
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};

exports.fetchAllVideos = async (req, res) => {
  try {
    const videos = await Video.find({});

    res.json(videos);
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};
