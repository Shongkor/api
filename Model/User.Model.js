const mongoose = require("mongoose");
// const validator = require("validator");


const userSchema = mongoose.Schema({
    fullName: String,
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