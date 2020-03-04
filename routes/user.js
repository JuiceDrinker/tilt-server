const express = require("express");
const userRouter = express.Router();
const createError = require("http-errors");
const User = require("../models/user");

userRouter.get("/delete-user", (req, res, next) => {
  //Get user by ID
  const { _id } = req.session.currentUser;
  console.log("id :", _id);
  User.findByIdAndRemove(req.session.currentUser)
    .then(() => {
      req.session.destroy(err => {
        if (err) next(createError);
        else res.status(204);
      });
    })
    .catch(err => {
      next(createError(err));
    });
});

module.exports = userRouter;
