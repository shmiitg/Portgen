const mongoose = require("mongoose");

const developerSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        hash: {
            type: String,
            unique: true,
        },
        education: {
            type: Array,
            default: null,
        },
        experience: {
            type: Array,
            default: null,
        },
        project: {
            type: Array,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

const Developer = mongoose.model("Developer", developerSchema);
module.exports = Developer;
