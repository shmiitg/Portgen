const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    hash: {
        type: String,
        unique: true
    },
    email: {
        type: String,
    },
    company: {
        type: Array
    },
    description: {
        type: Array
    },
    work_start: {
        type: Array
    },
    work_end: {
        type: Array
    }
}, {
    timestamps: true
})

const Experience = mongoose.model('Experience', experienceSchema);
module.exports = Experience;