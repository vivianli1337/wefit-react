import "./style.css";
import Navigation from "../Navigation";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./Signup";

export default function Account() {
    return (
        <>
            <Navigation />
            <div className="flex-fill">
                <Routes>
                    <Route path="/wefit/signup" element={<SignUpPage />} />
                </Routes>
            </div>
        </>
    );
}
