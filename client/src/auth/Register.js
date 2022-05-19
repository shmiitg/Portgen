import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGooglePlusG } from "react-icons/fa";
import classes from "./Auth.module.css";

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const handleInput = (e) => setUser({ ...user, [e.target.name]: e.target.value });
    const formSubmit = async () => {
        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        const data = await res.json();
        if (res.status === 200) {
            navigate("/login");
        } else {
            window.alert(data.error);
        }
    };

    return (
        <div className={classes["form-container"]}>
            <h3>Create new account</h3>
            <div className={classes["social-box"]}>
                <Link to="/">
                    <FaGooglePlusG />
                </Link>
                <Link to="/">
                    <FaFacebook />
                </Link>
                <Link to="/">
                    <FaGithub />
                </Link>
            </div>
            <p>or Sign Up with Email</p>
            <div className={classes["form-inputs"]}>
                <div className={classes["form-fields"]}>
                    <input
                        onChange={handleInput}
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={user.name}
                    />
                </div>
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
                        sign up
                    </button>
                </div>
            </div>
            <p className={classes["toggle"]}>
                Already have account?<Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Register;
