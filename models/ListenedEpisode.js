const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listenedEpisode = new Schema({
  episodeID: { type: String }, //Store API episode ID
  progress: { type: Number } //Time listend in seconds
});

module.exports = listenedEpisode;
