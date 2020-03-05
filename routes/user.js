const express = require("express");
const userRouter = express.Router();
const createError = require("http-errors");
const User = require("../models/User");

userRouter.delete("/", (req, res, next) => {
  //Get user by ID
  const { _id } = req.session.currentUser;
  User.findByIdAndDelete(_id)
    .then(() => {
      req.session.destroy(err => {
        if (err) next(createError);
        else {
          res.status(204).json();
        }
      });
    })
    .catch(err => {
      next(createError(err));
    });
});

module.exports = userRouter;
