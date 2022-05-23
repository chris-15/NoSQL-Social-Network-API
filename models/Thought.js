const { Schema, model, Types} = require("mongoose");
const moment = require('moment');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: [1, "Thought must be atleast 1 character long!"],
            maxLength: [280, "Thought must be less 280 characters long!"]
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // using moment to format the date
            get: (createdAtVal) => moment(createdAtVal).format("MMM Do YYYY, h:mm a")

        },
        username: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        //using ReactionSchema to validate data for a reaction
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount', ThoughtSchema).get(function() {
    return this.reactions.length;
})

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;