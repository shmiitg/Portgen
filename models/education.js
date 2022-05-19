const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    hash: {
        type: String,
        unique: true
    },
    email: {
        type: String,
    },
    university: {
        type: Array
    },
    percentage: {
        type: Array
    },
    degree: {
        type: Array
    },
    degree_start: {
        type: Array
    },
    degree_end: {
        type: Array
    }
}, {
    timestamps: true
})

const Education = mongoose.model('Education', educationSchema);
module.exports = Education;