import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function WefitNav() {
    const { pathname } = useLocation();
    const navigate = useNavigate(); // For navigation
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

    useEffect(() => {
        // Authenticate if the pathname includes dashboard or community forum
        if (pathname.includes("/wefit/dashboard") || pathname.includes("/wefit/communityforum")) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [pathname]); // Re-run whenever the pathname changes

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {/* Brand */}
                <a
                    className="navbar-brand wefit text-white fw-bold fs-4"
                    style={{ fontStyle: "italic" }}
                    href="#/Info/Home"
                >
                    WeFit
                </a>

                {/* Navigation Links */}
                <ul className="nav nav-pills ms-auto">
                    <li className="nav-item">
                        <Link
                            to="/wefit/dashboard"
                            className={`nav-link ${pathname.includes("dashboard") ? "fw-bold" : ""} text-white`}
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/wefit/communityforum"
                            className={`nav-link ${pathname.includes("communityforum") ? "fw-bold" : ""} text-white`}
                        >
                            Community Forum
                        </Link>
                    </li>

                    {/* Conditional Rendering */}
                    {isAuthenticated ? (
                        // User Dropdown when authenticated
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle text-white"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                href="#"
                            >
                                User
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <Link className="dropdown-item" to="/wefit/profile">
                                        View Profile
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <button
                                        className="dropdown-item text-danger"
                                        onClick={() => {
                                            setIsAuthenticated(false); // Log out the user
                                            navigate("/wefit/login"); // Redirect to login page
                                        }}
                                    >
                                        Log Out
                                    </button>
                                </li>
                            </ul>
                        </li>
                    ) : (
                        // Log In and Sign Up when not authenticated
                        <>
                            <li className="nav-item">
                                <Link
                                    to="/wefit/login"
                                    className={`nav-link ${pathname.includes("login") ? "fw-bold" : ""} text-white`}
                                >
                                    Log In
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/wefit/signup"
                                    className={`nav-link ${pathname.includes("signup") ? "fw-bold" : ""} text-white`}
                                >
                                    Sign Up
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}
