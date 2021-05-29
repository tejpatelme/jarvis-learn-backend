const { Playlist } = require("../models/playlist.model");

exports.createNewPlaylist = async (req, res) => {
  const { name } = req.body;
  const userId = req.userId;

  try {
    const newPlaylist = await Playlist.create({
      userId,
      name,
      videos: [],
    });

    res.status(201).json({ newPlaylist });
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};

exports.getUserPlaylists = async (req, res) => {
  const userId = req.userId;

  try {
    let userPlaylists = await Playlist.find({ userId }).populate("videos");

    res.json(userPlaylists);
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};
