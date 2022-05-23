const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Must provide username!"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Must provide email!"],
    unique: true,
    // using match for email validation with email regex to check if string
    match: [/.+\@.+\..+/, "Must be an email format!"],
  },
  thoughts: [
      {
          type: Schema.Types.ObjectId,
          ref: "Thought"
      }
  ],
  friends: [
      {
          type: Schema.Types.ObjectId,
          ref: "User"
      }
  ]
},
{
    //telling the model to use virtuals
    toJSON: {
        virtuals: true,
    },
    // id set to false because its a virtual that mongoose returns and we dont need
    id: false,
});

//vitrual that gets total friends
UserSchema.virtual("friendCount").get(function() {
    return this.friends.length
})

// Creating User model using the UserSchema
const User = model("User", UserSchema);

// exporting the User model
module.exports = User;