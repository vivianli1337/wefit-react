import WefitNav from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import SignUpPage from "./Account/Signup";
import SignInPage from "./Account/Signin";
import Dashboard from "./Dashboard";
import Profile from "./Account/profile";
import Programs from "./Program";
import CommunityForum from "./CommunityForum";

export default function WeFit() {
    return (
        <div id="wd-wefit">
            <WefitNav />
            <Routes>
                <Route path="/" element={<Navigate to="signup" />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<SignInPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/program/:programId/*" element={<Programs />} />
                <Route path="/communityforum" element={<CommunityForum />} />
            </Routes>
        </div>
    );
}