const express = require("express");
const router = express.Router();
const Portfolio = require("../models/portfolio");

router.get("/:slug", async (req, res) => {
    try {
        const hash = req.params.slug;
        const portfolio = await Portfolio.findOne({ hash });
        if (!portfolio) {
            return res.status(404).json({ error: "Not found" });
        }
        const { education, project, experience } = portfolio;
        return res.status(200).json({ education, project, experience });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.post("/:slug", async (req, res) => {
    try {
        const hash = req.params.slug;
        const portfolio = await Portfolio.findOne({ hash });
        if (!portfolio) {
            return res.status(404).json({ error: "Not found" });
        }
        const { education, project, experience } = req.body;
        const update = { education, project, experience };
        await portfolio.updateOne(update);
        res.status(200).json({ msg: "Updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.post("/education/:slug", async (req, res) => {
    try {
        const hash = req.params.slug;
        const portfolio = await Portfolio.findOne({ hash });
        if (!portfolio) {
            return res.status(404).json({ error: "Not found" });
        }
        const { education } = req.body;
        const update = { education };
        await portfolio.updateOne(update);
        res.status(200).json({ msg: "Updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.post("/project/:slug", async (req, res) => {
    try {
        const hash = req.params.slug;
        const portfolio = await Portfolio.findOne({ hash });
        if (!portfolio) {
            return res.status(404).json({ error: "Not found" });
        }
        const { project } = req.body;
        const update = { project };
        await portfolio.updateOne(update);
        res.status(200).json({ msg: "Updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.post("/experience/:slug", async (req, res) => {
    try {
        const hash = req.params.slug;
        const portfolio = await Portfolio.findOne({ hash });
        if (!portfolio) {
            return res.status(404).json({ error: "Not found" });
        }
        const { experience } = req.body;
        const update = { experience };
        await portfolio.updateOne(update);
        res.status(200).json({ msg: "Updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.get("/preview/:slug", async (req, res) => {
    try {
        const hash = req.params.slug;
        const portfolio = await Portfolio.findOne({ hash });
        if (!portfolio) {
            return res.status(404).json({ error: "Not found" });
        }
        const { education, project, experience } = portfolio;
        res.status(200).json({ education, experience, project });
    } catch (err) {
        res.status(500).json({ error: "Some error occured" });
    }
});

module.exports = router;
