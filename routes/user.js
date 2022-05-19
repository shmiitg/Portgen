const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Developer = require("../models/developer");
const crypto = require("crypto");

router.get("/info", async (req, res) => {
    if (!req.user) {
        return res.status(404).json({ error: "No user found" });
    }
    try {
        const userPortfolio = await User.findOne({ email: req.user.email });
        const ids = userPortfolio.portfolio_id;
        const types = userPortfolio.portfolio_type;
        return res.status(200).json({ user: req.user, ids: ids, types: types });
    } catch (err) {
        res.status(500).json({ error: "Some error occured" });
    }
});

router.get("/portfolio/developer", async (req, res) => {
    try {
        const random = crypto.randomBytes(16).toString("hex");
        let user = await User.findOne({ email: req.user.email });
        let portfolio_id = user.portfolio_id;
        let portfolio_type = user.portfolio_type;
        portfolio_id.push(random);
        portfolio_type.push("Developer");
        const update = { portfolio_id: portfolio_id, portfolio_type: portfolio_type };
        await User.findOneAndUpdate({ email: req.user.email }, update);
        const developer = new Developer({ userId: user._id, hash: random });
        await developer.save();
        res.status(200).json({ random: random });
    } catch (err) {
        res.status(500).json({ error: "Some error occured" });
    }
});

module.exports = router;
