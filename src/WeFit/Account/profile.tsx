// import React from "react";
// import "../style.css";
// import { useNavigate } from "react-router-dom";
// import { setCurrentUser } from "./reducer";

// export default function Profile() {
//     const navigate = useNavigate();
//     return (
//         <div className="container my-5">
//             <h1 className="text-center fw-bold mb-4">Profile</h1>
//             <form className="mx-auto" style={{ maxWidth: "400px" }}>
//                 {/* Username */}
//                 <div className="mb-3">
//                     <label htmlFor="username" className="form-label">
//                         Username
//                     </label>
//                     <input
//                         type="text"
//                         id="username"
//                         className="form-control rounded-pill"
//                         placeholder="Enter Username"
//                     />
//                 </div>

//                 {/* Password */}
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">
//                         Password
//                     </label>
//                     <input
//                         type="password"
//                         id="password"
//                         className="form-control rounded-pill"
//                         placeholder="Enter Password"
//                     />
//                 </div>

//                 {/* First Name */}
//                 <div className="mb-3">
//                     <label htmlFor="firstName" className="form-label">
//                         First Name
//                     </label>
//                     <input
//                         type="text"
//                         id="firstName"
//                         className="form-control rounded-pill"
//                         placeholder="Enter First Name"
//                     />
//                 </div>

//                 {/* Last Name */}
//                 <div className="mb-3">
//                     <label htmlFor="lastName" className="form-label">
//                         Last Name
//                     </label>
//                     <input
//                         type="text"
//                         id="lastName"
//                         className="form-control rounded-pill"
//                         placeholder="Enter Last Name"
//                     />
//                 </div>

//                 {/* Email */}
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">
//                         Email
//                     </label>
//                     <input
//                         type="email"
//                         id="email"
//                         className="form-control rounded-pill"
//                         placeholder="Enter email address"
//                     />
//                 </div>

//                 {/* Gender */}
//                 <div className="mb-3">
//                     <label htmlFor="gender" className="form-label">
//                         Gender
//                     </label>
//                     <select id="gender" className="form-control rounded-pill">
//                         <option>Select Gender</option>
//                         <option>Male</option>
//                         <option>Female</option>
//                         <option>Other</option>
//                     </select>
//                 </div>

//                 {/* Role */}
//                 <div className="mb-3">
//                     <label htmlFor="role" className="form-label">
//                         Role
//                     </label>
//                     <select id="role" className="form-control rounded-pill">
//                         <option>Select Role</option>
//                         <option>User</option>
//                         <option>Admin</option>
//                         <option>Trainer</option>
//                     </select>
//                 </div>

//                 {/* Buttons */}
//                 <div className="d-flex justify-content-between">
//                     <button type="button" className="btn btn-outline-dark rounded-pill"
//                     onClick={() => navigate("/wefit/login")}>
//                         Log Out
//                     </button>
//                     <button type="submit" className="btn btn-dark rounded-pill">
//                         Update
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }
import React, { useState, useEffect } from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, clearCurrentUser } from "./reducer";
import * as client from "./client";

export default function Profile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Access the current user from Redux
    const currentUser = useSelector((state: any) => state.account?.currentUser);

    // Local state to handle editable profile fields
    const [profile, setProfile] = useState<any>(currentUser || {});

    // Fetch Profile on Component Mount
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const fetchedProfile = await client.getProfile();
                dispatch(setCurrentUser(fetchedProfile)); // Update Redux store
                setProfile(fetchedProfile); // Set local profile state
            } catch (error) {
                console.error("Failed to fetch profile:", error);
                navigate("/wefit/login"); // Redirect to login if unauthorized
            }
        };

        if (!currentUser) {
            fetchProfile();
        }
    }, [currentUser, dispatch, navigate]);

    // Update Profile
    const updateProfile = async () => {
        if (!profile.username || !profile.email) {
            alert("Username and Email are required!");
            return;
        }

        try {
            const updatedProfile = await client.updateUser(profile._id, profile);
            dispatch(setCurrentUser(updatedProfile)); // Update Redux store
            alert("Profile updated successfully!");
            navigate("/wefit/dashboard"); // Redirect to dashboard
        } catch (error) {
            console.error("Failed to update profile:", error);
            alert("Failed to update profile. Please try again.");
        }
    };

    // Log Out
    const logOut = async () => {
        try {
            await client.logout();
            dispatch(clearCurrentUser()); // Clear Redux state
            navigate("/wefit/login"); // Redirect to login
        } catch (error) {
            console.error("Logout failed:", error);
            alert("Failed to log out. Please try again.");
        }
    };

    // Cancel Editing
    const cancelUpdate = () => {
        navigate("/wefit/dashboard"); // Redirect to dashboard
    };

    return (
        <div className="container my-5">
            <h1 className="text-center fw-bold mb-4">Profile</h1>
            <form
                className="mx-auto"
                style={{ maxWidth: "400px" }}
                onSubmit={(e) => {
                    e.preventDefault();
                    updateProfile();
                }}
            >
                {/* Username */}
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="form-control rounded-pill"
                        placeholder="Enter Username"
                        value={profile.username || ""}
                        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                    />
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="form-control rounded-pill"
                        placeholder="Enter Password"
                        value={profile.password || ""}
                        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                    />
                </div>

                {/* First Name */}
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        className="form-control rounded-pill"
                        placeholder="Enter First Name"
                        value={profile.firstName || ""}
                        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                    />
                </div>

                {/* Last Name */}
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        className="form-control rounded-pill"
                        placeholder="Enter Last Name"
                        value={profile.lastName || ""}
                        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                    />
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="form-control rounded-pill"
                        placeholder="Enter Email Address"
                        value={profile.email || ""}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    />
                </div>

                {/* Gender */}
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">
                        Gender
                    </label>
                    <select
                        id="gender"
                        className="form-control rounded-pill"
                        value={profile.gender || ""}
                        onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                    >
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>

                {/* Role */}
                <div className="mb-3">
                    <label htmlFor="role" className="form-label">
                        Role
                    </label>
                    <select
                        id="role"
                        className="form-control rounded-pill"
                        value={profile.role || ""}
                        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                    >
                        <option>Select Role</option>
                        <option>TRAINEE</option>
                        <option>TRAINER</option>
                    </select>
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-between">
                    <button
                        type="button"
                        className="btn btn-outline-dark rounded-pill"
                        onClick={logOut}
                    >
                        Log Out
                    </button>
                    <div>
                        <button
                            type="button"
                            className="btn btn-outline-secondary rounded-pill me-3"
                            onClick={cancelUpdate}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-dark rounded-pill">
                            Update
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
