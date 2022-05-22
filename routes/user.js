const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Portfolio = require("../models/portfolio");
const crypto = require("crypto");
const moment = require("moment");

router.get("/info", async (req, res) => {
    if (!req.user) {
        return res.status(404).json({ error: "No user found" });
    }
    try {
        const userPortfolio = await User.findOne({ email: req.user.email });
        const ids = userPortfolio.portfolio_id;
        const dates = userPortfolio.portfolio_date;
        return res.status(200).json({ user: req.user, ids: ids, dates: dates });
    } catch (err) {
        res.status(500).json({ error: "Some error occured" });
    }
});

router.get("/portfolio", async (req, res) => {
    try {
        const random = crypto.randomBytes(16).toString("hex");
        let user = await User.findOne({ email: req.user.email });
        let portfolio_id = user.portfolio_id;
        let portfolio_date = user.portfolio_date;
        portfolio_id.push(random);
        const date = moment(new Date()).format("DD MMMM YYYY").toString();
        portfolio_date.push(date);
        const update = { portfolio_id: portfolio_id, portfolio_date: portfolio_date };
        await User.findOneAndUpdate({ email: req.user.email }, update);
        const portfolio = new Portfolio({ userId: user._id, hash: random });
        await portfolio.save();
        res.status(200).json({ random: random });
    } catch (err) {
        res.status(500).json({ error: "Some error occured" });
    }
});

module.exports = router;
