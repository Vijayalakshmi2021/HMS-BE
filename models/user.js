// User.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    studentId: {
        type: String,
        unique: true, // Ensure student ID is unique
    },
});

const User = mongoose.model("users", userSchema);

module.exports = User;