const { User } = require("../models");

const userController = {
  // get all users - api/users
  getAllUsers(req, res) {
    User.find({})
      //including thoughts and friends of the user for the user query
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .populate({
        path: "friends",
        select: "-__v",
      })
      //excluding __v using select
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //get user by id - api/users/:id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      //including thoughts and friends of the user for the user query
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .populate({
        path: "friends",
        select: "-__v",
      })
      .select("-__v")
      .then((dbUserData) => {
        //if no user found
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.satuts(400).json(err);
      });
  },

  //create a user, POST- api/users
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.satuts(400).json(err);
      });
  },

  // update users by id PUT- api/users/:id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
    .then((dbUserData) => {
      //if no user found
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id!" });
      }
      res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err))

  },

  //delete users by id DELETE - api/users/:id
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbUserData) => {
        //if no user found
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = userController;
