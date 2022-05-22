const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Must provide username!'],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Must provide email!'],
        unique: true,
        // using match for email validation with email regex to check if string
        match: [/.+\@.+\..+/, 'Must be an email format!']
    }
})