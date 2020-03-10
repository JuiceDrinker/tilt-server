const express = require("express");
const listenedEpisodeRouter = express.Router();
const createError = require("http-errors");
const User = require("../models/User");
const ListenedEpisode = require("../models/ListenedEpisode");

//TODO: Create getOneById -> Return find({userID, episodeID})
listenedEpisodeRouter.get("/", (req, res, next) => {
  const userID = req.session.currentUser._id;
  const { episodeID } = req.body;
  ListenedEpisode.find({ userID: userID, episodeID: episodeID })
    .then(returnedObj => {
      res.status(200).json(returnedObj);
    })
    .catch(err => {
      console.log("err :", err);
    });
});

listenedEpisodeRouter.post("/", async (req, res, next) => {
  try {
    const userID = req.session.currentUser._id;
    const { episodeID } = req.body;
    await ListenedEpisode.create({
      userID,
      episodeID
    });
    res.status(200).json();
  } catch (error) {
    next(createError(error));
  }
});

listenedEpisodeRouter.put("/", async (req, res, next) => {
  console.log("req.body :", req.body);
  try {
    const { progress, id } = req.body;
    const userID = req.session.currentUser._id;

    const filter = { userID: userID, episodeID: id };
    const update = { progress: progress };
    await ListenedEpisode.findOneAndUpdate(filter, update);
    res.send(200);
  } catch (error) {
    next(createError(error));
  }
});
module.exports = listenedEpisodeRouter;
