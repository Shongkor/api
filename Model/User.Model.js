const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = mongoose.Schema({
    fullName: String,
    email: {
        type: String,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    password: String,
    AppKey: String,
    dateOfBirth: Date,
    Gender: String,
    SubjectCategory: [{type: String}],
    agreeToMarketing : Boolean,
    correspond : Boolean,
    latitude : Number,
    longitude: Number

}, {
    timestamps: true
});

const User = mongoose.model("UserList", userSchema);

module.exports = User;