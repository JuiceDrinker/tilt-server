const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listenedEpisode = new Schema({
  episodeID: { type: String, required: true }, //Store API episode ID
  progress: { type: Number, required: true, default: 0 } //Time listened in seconds
});

const ListenedEpisode = mongoose.model("ListenedEpisode", listenedEpisode);

module.exports = ListenedEpisode;
    