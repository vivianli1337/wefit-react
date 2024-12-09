import { useLocation } from "react-router";
import "./style.css";

export default function TOC() {
    const { pathname } = useLocation();
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <a
                    className="navbar-brand wefit text-white fw-bold fs-4"
                    style={{ fontStyle: "italic" }}
                    href="#/Info/Home"
                >
                    WeFit
                </a>
                <ul className="nav nav-pills ms-auto">
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
