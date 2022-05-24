const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
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
        personal: {
            type: Object,
            default: null,
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

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
module.exports = Portfolio;
