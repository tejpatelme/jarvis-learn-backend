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

    res.status(201).json({ success: true, newPlaylist });
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};

exports.getUserPlaylists = async (req, res) => {
  const userId = req.userId;

  try {
    let userPlaylists = await Playlist.find({ userId }).populate("videos");

    res.json({ success: true, userPlaylists });
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};

exports.addOrRemoveVideo = async (req, res) => {
  const { playlistId } = req.params;
  const { videoId } = req.body;

  try {
    const playlist = await Playlist.findById(playlistId);

    const videoExistsIndex = playlist.videos.findIndex(
      (video) => String(video) === String(videoId)
    );

    videoExistsIndex !== -1
      ? playlist.videos.splice(videoExistsIndex, 1)
      : playlist.videos.push(videoId);

    let updatedPlaylist = await playlist.save();
    updatedPlaylist = await updatedPlaylist.populate("videos").execPopulate();

    res.status(200).json({ success: true, updatedPlaylist });
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};

exports.deletePlaylist = async (req, res) => {
  const userId = req.userId;
  const { playlistId } = req.params;

  try {
    await Playlist.findByIdAndDelete(playlistId);
    const updatedPlaylists = await Playlist.find({ userId }).populate("videos");

    res.status(200).json({ success: true, updatedPlaylists });
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};
