const { Thought, User } = require("../models");

const thoughtController = {
  // get all thoughts GET api/thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .populate({
        path: "reactions",
      })
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //get thought by id- get api/thoughts/:id
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .populate({
        path: "reactions",
      })
      .select("-__v")
      .then((dbThoughtData) => {
        //if no thought is found
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //add/create a thought POST /api/thoughts/:userId
  // "thoughtText", "username", "userId"
  createThought({ params, body }, res) {
    console.log(body);
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((dbThoughtData) => {
        //if no user found
        if (!dbThoughtData) {
          res.status(404).json({ message: "No user found with this id!" });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },

  //update thought by id PUT /api/thoughts/:id
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbThoughtData) => {
        //if no thought found
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id!" });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },

  //delete thought by id DELETE /api/thoughts/:id
  deleteThought({ params }, res) {
      Thought.findByIdAndDelete({ _id: params.id })
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: "No thought found with this id!" })
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.satus(400).json(err))
  },

  // /api/thoughts/:thoughtId/reactions/
  //add reactions to thoughts
  addReaction({ params, body }, res) {
      Thought.findOneAndUpdate(
          { _id: params.thoughtId},
          { $push: { reactions: body }},
          { new: true, runValidators: true }
      )
        .then(dbThoughtData => {
            //if no thought found
            if(!dbThoughtData) {
                res.status(404).json({ message: "No thought with this id found!" })
            }
            res.json(dbThoughtData)
        })
        .catch(err => res.satus(400).json(err));
  },

  // /api/thoughts/:thoughtId/reactions/:reactionId
  // delete a reaction
  deleteReaction({ params }, res) {
      Thought.findOneAndUpdate(
          { _id: params.thoughtId },
          { $pull: { reactions: { reactionId: params.reactionId }}},
          { new: true }
      )
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch( err => res.status(400).json(err))
  }
};

module.exports = thoughtController;