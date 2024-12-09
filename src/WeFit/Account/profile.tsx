import React from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();
    return (
        <div className="container my-5">
            <h1 className="text-center fw-bold mb-4">Profile</h1>
            <form className="mx-auto" style={{ maxWidth: "400px" }}>
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
                        placeholder="Enter email address"
                    />
                </div>

                {/* Gender */}
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">
                        Gender
                    </label>
                    <select id="gender" className="form-control rounded-pill">
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
                    <select id="role" className="form-control rounded-pill">
                        <option>Select Role</option>
                        <option>User</option>
                        <option>Admin</option>
                        <option>Trainer</option>
                    </select>
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-outline-dark rounded-pill"
                    onClick={() => navigate("/wefit/login")}>
                        Log Out
                    </button>
                    <button type="submit" className="btn btn-dark rounded-pill">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}
