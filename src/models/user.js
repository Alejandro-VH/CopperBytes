const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 255,
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 15,
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;