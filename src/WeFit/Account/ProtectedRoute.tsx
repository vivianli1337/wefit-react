import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: any }) {
    // Access the current user from Redux state
    const { currentUser } = useSelector((state: any) => state.account);

    // If currentUser exists, render the children (protected content)
    if (currentUser) {
        return children;
    } 
    // If no currentUser, redirect to login page
    else {
        return <Navigate to="/wefit/login" />;
    }
}
