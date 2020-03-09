const express = require("express");
const listenedEpisodeRouter = express.Router();
const createError = require("http-errors");
const User = require("../models/User");
const ListenedEpisode = require("../models/ListenedEpisode");

listenedEpisodeRouter.post("/", async (req, res, next) => {
  try {
    const userID = req.session.currentUser.id;
    const { episodeID } = req.body;
    const newListenedEpisode = await ListenedEpisode.create({ episodeID });
    await User.findByIdAndUpdate(userID, {
      $push: { listenedEpisodes: newListenedEpisode._id }
    });
    res.status(200);
  } catch (error) {
    next(createError(error));
  }
});

listenedEpisodeRouter.put("/:id", async (req, res, next) => {
  try {
    // const { id } = req.params;
    // console.log("id :", id);
    const { progress, id } = req.body;
    console.log("progress :", progress);

    await ListenedEpisode.findByIdAndUpdate(ObjectId(id), { progress: progress });
    res.send(200).json();
  } catch (error) {
    next(createError(error));
  }
});
module.exports = listenedEpisodeRouter;
