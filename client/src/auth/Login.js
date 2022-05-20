import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { FaGooglePlusG, FaGithub } from "react-icons/fa";
import classes from "./Auth.module.css";

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const handleInput = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const { setUserName } = useContext(UserContext);

    const formSubmit = async () => {
        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        const data = await res.json();
        if (res.status === 200) {
            setUserName(data.user.username);
        } else {
            window.alert(data.error);
        }
    };

    const googleAuth = () => {
        window.open("https://shm-portgen.herokuapp.com/auth/google", "_self");
    };
    const githubAuth = () => {
        window.open("https://shm-portgen.herokuapp.com/auth/github", "_self");
    };

    return (
        <div className={classes["form-main-container"]}>
            <div className={classes["form-container"]}>
                <h3>Welcome Back</h3>
                <div className={classes["social-box"]}>
                    <div className={classes["social-icon"]} onClick={googleAuth}>
                        <FaGooglePlusG />
                    </div>
                    <div className={classes["social-icon"]} onClick={githubAuth}>
                        <FaGithub />
                    </div>
                </div>
                <p>or Sign In with Email</p>
                <div className={classes["form-inputs"]}>
                    <div className={classes["form-fields"]}>
                        <input
                            onChange={handleInput}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={user.email}
                        />
                    </div>
                    <div className={classes["form-fields"]}>
                        <input
                            onChange={handleInput}
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={user.password}
                        />
                    </div>
                    <div className={classes["form-fields"]}>
                        <button className={classes["btn"]} onClick={formSubmit}>
                            sign in
                        </button>
                    </div>
                </div>
                <p className={classes["toggle"]}>
                    Don't have account?<Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
