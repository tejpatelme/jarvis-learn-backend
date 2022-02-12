const { Schema, model } = require("mongoose");

const VideoSchema = new Schema({
  videoId: {
    type: String,
    required: "Video Id is required",
  },
  imageURL: {
    type: String,
    required: "URL of video image is required",
  },
  name: {
    type: String,
    required: "Video name is required",
  },
  description: {
    type: String,
    required: "Description of the video is required",
  },
  channelName: {
    type: String,
    required: "Channel name is required",
  },
  channelLogoURL: {
    type: String,
    required: "URL of channel logo image is required",
  },
  topic: {
    type: String,
    required: "Topic of the video is required",
  },
});

const Video = model("Video", VideoSchema);

module.exports = { Video };
