import { useLocation } from "react-router";
import "./style.css";

export default function TOC() {
    const { pathname } = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex " style={{ padding: "0.5rem 1rem" }}>
            <div className="container wd">
                <a className="navbar-brand wefit-logo d-flex " href="#/Info/Home">WeFit</a>
                <ul className="nav nav-pills me-3">
                    <li className="nav-item">
                        <a 
                            href="#/Info/Home" 
                            className={`nav-link ${pathname.includes("Home") ? "fw-bold" : ""} npm text-white`}>
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            href="#/Wefit/dashboard" 
                            className={`nav-link ${pathname.includes("Program") ? "fw-bold" : ""} text-white`}>
                            Program
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            href="#/Info/About" 
                            className={`nav-link ${pathname.includes("About") ? "fw-bold" : ""} text-white`}>
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            href="#/Wefit/communityforum" 
                            className={`nav-link ${pathname.includes("CommunityForum") ? "fw-bold" : ""} text-white`}>
                            Community Forum
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            href="#/wefit/login" 
                            className={`nav-link ${pathname.includes("login") ? "fw-bold" : ""} text-white`}>
                            Log In
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            href="#/wefit/signup" 
                            className={`nav-link ${pathname.includes("signop") ? "fw-bold" : ""} text-white`}>
                            Sign Up
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
