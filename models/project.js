const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    hash: {
        type: String,
        unique: true
    },
    email: {
        type: String,
    },
    title: {
        type: Array
    },
    description: {
        type: Array
    },
    tech: {
        type: Array
    },
    link: {
        type: Array
    }
}, {
    timestamps: true
})

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;