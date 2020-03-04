const express = require("express");
const userRouter = express.Router();
const createError = require("http-errors");
const User = require("../models/user");

userRouter.put("/delete-user", (req, res, next) => {
  //Get user by ID
  const { _id } = req.session.currentUser;
  User.findByIdAndRemove({ id: _id })
    .then(() => {
      res.status(204);
    })
    .catch(err => {
      next(createError(err));
    });
});

module.exports = userRouter;
