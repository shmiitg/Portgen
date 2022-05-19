require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.MONGODBURL;

const mongoServer = mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

module.exports = mongoServer;
