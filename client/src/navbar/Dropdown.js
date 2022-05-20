import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = () => {
    const { setUserName } = useContext(UserContext);

    const logout = async () => {
        const res = await fetch("/api/logout");
        const data = await res.json();
        if (res.status === 200) {
            setUserName(null);
        } else {
            window.alert(data.error);
        }
    };

    const dotsToggle = () => {
        document.querySelector(".dots").classList.toggle("active");
    };

    return (
        <>
            <div class="dots" onClick={dotsToggle}>
                <div className="user__avatar">
                    <FaUserCircle />
                </div>
                <div class="shadow cut"></div>
                <div class="dropdown__container cut">
                    <div class="drop"></div>
                </div>
                <div class="list">
                    <ul>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>Edit Profile</li>
                        <li onClick={logout}>Logout</li>
                    </ul>
                </div>
            </div>
            <div class="cursor" onClick={dotsToggle}></div>
        </>
    );
};

export default Dropdown;
