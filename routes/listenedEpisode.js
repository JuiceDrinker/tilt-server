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
});

listenedEpisodeRouter.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { progress } = req.body;
    ListenedEpisode.findByIdAndUpdate(id, { progress: progress })
      .then(result => {
        res.send(200).json(result);
      })
      .catch(err => {
        next(createError(err));
      });
  } catch (error) {
    next(createError(error));
  }
});
module.exports = listenedEpisodeRouter;
