const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const bcrypt = require("bcryptjs");

router.post("/login", (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).send({ error: "All fields are required" });
        }
        passport.authenticate("local", (err, user, info) => {
            if (err) {
                return res.status(422).send({ error: info });
            }
            if (!user) {
                res.status(401).send({ error: info });
            } else {
                req.logIn(user, (error) => {
                    if (error) {
                        return res.status(422).send({ error: "Some error occured" });
                    }
                    res.status(200).send({ user: user, msg: info });
                });
            }
        })(req, res, next);
    } catch (err) {
        res.status(500).send({ error: "Some error occured" });
    }
});

router.post("/register", async (req, res, next) => {
    try {
        let { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(422).send({ error: "All fields are required" });
        }
        let user = await User.findOne({ email });
        if (user) {
            return res.status(401).send({ error: "User already exists" });
        }
        password = await bcrypt.hash(password, 10);
        user = new User({ name, email, password });
        await user.save();
        passport.authenticate("local", (err, user, info) => {
            if (err) {
                return res.status(422).send({ error: info });
            }
            if (!user) {
                res.status(401).send({ error: info });
            } else {
                req.logIn(user, (error) => {
                    if (error) {
                        return res.status(422).send({ error: "Some error occured" });
                    }
                    res.status(200).send({ user: user, msg: info });
                });
            }
        })(req, res, next);
    } catch (err) {
        res.status(500).send({ error: "Some error occured" });
    }
});

router.get("/logout", (req, res) => {
    try {
        req.logOut();
        res.status(200).json({ msg: "You are logged out" });
    } catch (err) {
        res.status(500).json({ error: "Some error occured" });
    }
});

module.exports = router;
