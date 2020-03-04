const express = require("express");
const listenedEpisodeRouter = express.Router();
const createError = require("http-errors");
const User = require("../models/User");
const ListenedEpisode = require("../models/ListenedEpisode");

listenedEpisodeRouter.post("/", async (req, res, next) => {
  try {
    const userID = req.session.currentUser._id;
    const { episodeID } = req.body;
    const newListenedEpisode = await ListenedEpisode.create({ episodeID });
    await User.findByIdAndUpdate(userID, {
      $push: { listenedEpisodes: newListenedEpisode._id }
    });
    res.status(200).json(newListenedEpisode);
  } catch (error) {
    next(createError(error));
  }

  //   User.find({ id: _id })
  //     .then(userObj => {
  //       usesrObj.listenedEpisodes.push();
  //     })
  //     .catch(err => {});
});
module.exports = listenedEpisodeRouter;
