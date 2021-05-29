const { Schema, model } = require("mongoose");

const PlaylistSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  name: {
    type: String,
    required: "Name of the playlist is required",
  },
  videos: [{ type: Schema.Types.ObjectId, ref: "Video" }],
});
