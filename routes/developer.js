const express = require("express");
const router = express.Router();
const Developer = require("../models/developer");

router.get("/:slug", async (req, res) => {
    try {
        const hash = req.params.slug;
        const developer = await Developer.findOne({ hash });
        if (!developer) {
            return res.status(404).json({ error: "Not found" });
        }
        const { education, project, experience } = developer;
        return res.status(200).json({ education, project, experience });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.post("/:slug", async (req, res) => {
    try {
        const hash = req.params.slug;
        const developer = await Developer.findOne({ hash });
        if (!developer) {
            return res.status(404).json({ error: "Not found" });
        }
        const { education, project } = req.body;
        const update = { education, project };
        await developer.updateOne(update);
        res.status(200).json({ msg: "Updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.get("/preview/:slug", async (req, res) => {
    try {
        const hash = req.params.slug;
        const developer = await Developer.findOne({ hash });
        if (!developer) {
            return res.status(404).json({ error: "Not found" });
        }
        const { education, project, experience } = developer;
        res.status(200).json({ education, experience, project });
    } catch (err) {
        res.status(500).json({ error: "Some error occured" });
    }
});

module.exports = router;
