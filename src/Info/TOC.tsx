import { useLocation } from "react-router";

export default function TOC() {
    const { pathname } = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ width: '100%' }}>
            <div className="container wd">
                <a className="navbar-brand" href="#/Info/Home">WeFit</a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a 
                            href="#/Info/Home" 
                            className={`nav-link ${pathname.includes("Home") ? "fw-bold" : ""} text-white`}>
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            href="#/Info/Program" 
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
                            href="#/Info/CommunityForum" 
                            className={`nav-link ${pathname.includes("CommunityForum") ? "fw-bold" : ""} text-white`}>
                            Community Forum
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            href="#/Info/LogIn" 
                            className={`nav-link ${pathname.includes("LogIn") ? "fw-bold" : ""} text-white`}>
                            Log In
                        </a>
                    </li>
                    <li className="nav-item">
                        <a 
                            href="#/Info/SignUp" 
                            className={`nav-link ${pathname.includes("SignUp") ? "fw-bold" : ""} text-white`}>
                            Sign Up
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
