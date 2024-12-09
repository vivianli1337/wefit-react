import WefitNav from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import SignUpPage from "./Account/Signup";
import SignInPage from "./Account/Signin";
import Dashboard from "./Dashboard";
import Profile from "./Account/profile";
import Programs from "./Program";
import CommunityForum from "./CommunityForum";
import ProtectedRoute from "./Account/ProtectedRoute";


export default function WeFit() {
    return (
        <div id="wd-wefit">
            <WefitNav />
            <Routes>
                <Route path="/" element={<Navigate to="signup" />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<SignInPage />} />
                <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
                <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
                <Route path="/program/:programId/*" element={<ProtectedRoute> <Programs /> </ProtectedRoute>} />
                <Route path="/communityforum" element={<ProtectedRoute> <CommunityForum /> </ProtectedRoute>} />
            </Routes>
        </div>
    );
}