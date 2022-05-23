const { Schema, model, Types} = require("mongoose");
// requiring moment to format createdAt dates
const moment = require('moment');


// reaction model schema
const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: [280, "Reaction must be 280 characters or less!"]
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format("MMM Do YYYY, h:mm a")
        }
    }
);

//thought model schema
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            //validaton for length requirement
            minlength: [1, "Thought must be atleast 1 character long!"],
            maxLength: [280, "Thought must be 280 characters or less!"]
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // using moment to format the date
            get: (createdAtVal) => moment(createdAtVal).format("MMM Do YYYY, h:mm a")

        },
        username: {
            type: String,
            required: true
        },
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
// virtual that returns how many reactions a thought has 
ThoughtSchema.virtual('reactionCount', ThoughtSchema).get(function() {
    return this.reactions.length;
})

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;