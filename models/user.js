const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ListenedEpisodes = require("./ListenedEpisode");
const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    listenedEpisodes: [
      { type: Schema.Types.ObjectId, ref: "ListenedEpisode", default: [] }
    ]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
