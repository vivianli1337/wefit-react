import { Route, Routes, Navigate } from "react-router";
import Home from "./Home";
import About from "./About";
import TOC from "./TOC";
import Contact from "./contact";
import "./style.css";
import SignUpPage from "../WeFit/Account/Signup";
// import store from "./store";
import { Provider } from "react-redux";

export default function Info() {
    return (
        // <Provider 
        // store={store}>
            <div className="p-3" id="wd-info">
                <TOC />
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Program" element={<About />} />
                    <Route path="About" element={<About />} />
                    <Route path="CommunityForum" element={<About />} />
                    <Route path="/LogIn" element={<About />} />
                    <Route path="/SignUp" element={<SignUpPage />} />
                </Routes>
                <Contact />
            </div>
        // </Provider>
    );
}
