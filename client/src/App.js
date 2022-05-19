import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./user/Dashboard";
import { UserContext } from "./context/UserContext";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Portfolio from "./portfolio/Portfolio";
// Devloper
import Developer from "./templates/developer/Developer";
import DeveloperPortfolio from "./preview/developer/Portfolio";
import Error from "./error/Error";

function App() {
    const { userName, setUserName } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        const res = await fetch("/api/user/info");
        const data = await res.json();
        if (res.status === 200) {
            setUserName(data.user.name);
        } else {
            setUserName(null);
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchData();
    }, [userName]);

    if (loading) return <></>;
    return (
        <div className="App">
            <Router>
                <Navbar name={userName} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={userName ? <Navigate to="/" /> : <Login />} />
                    <Route
                        path="/register"
                        element={userName ? <Navigate to="/" /> : <Register />}
                    />
                    <Route
                        path="/portfolio"
                        element={userName ? <Portfolio /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/portfolio/developer/:slug"
                        element={userName ? <Developer /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/portfolio/developer/preview/:slug"
                        element={userName ? <DeveloperPortfolio /> : <Navigate to="/login" />}
                    />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
