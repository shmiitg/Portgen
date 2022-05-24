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
import Personal from "./template/Personal";
import Education from "./template/Education";
import Project from "./template/Project";
import Experience from "./template/Experience";
import PortfolioPreview from "./preview/Portfolio";
import Error from "./error/Error";
import "./template/Template.css";

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
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={userName ? <Navigate to="/" /> : <Login />} />
                    <Route
                        path="/register"
                        element={userName ? <Navigate to="/" /> : <Register />}
                    />
                    <Route
                        path="/portfolio/:slug"
                        element={userName ? <Portfolio /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/portfolio/personal/:slug"
                        element={userName ? <Personal /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/portfolio/education/:slug"
                        element={userName ? <Education /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/portfolio/project/:slug"
                        element={userName ? <Project /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/portfolio/experience/:slug"
                        element={userName ? <Experience /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/portfolio/preview/:slug"
                        element={userName ? <PortfolioPreview /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/dashboard"
                        element={userName ? <Dashboard /> : <Navigate to="/" />}
                    />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
