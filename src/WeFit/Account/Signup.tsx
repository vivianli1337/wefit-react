import React from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";


export default function SignUpPage() {
    const navigate = useNavigate();
    return (
        <div className="signup-page">
            {/* Sign Up Form */}
            <div className="container text-center mt-5">
                <h1 className="fw-bold">Welcome to WeFit!</h1>
                <form className="mt-4">
                    <div className="mb-3 text-start">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Username"
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter First Name"
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Last Name"
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email address"
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">Gender</label>
                        <select className="form-select">
                            <option>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label">Role</label>
                        <select className="form-select">
                            <option>Select Role</option>
                            <option value="trainee">Trainee</option>
                            <option value="trainer">Trainer</option>
                        </select>
                    </div>

                    {/* Buttons */}
                    <div className="d-flex justify-content-center mt-4">
                        <button
                            type="button"
                            className="btn btn-outline-dark me-3 px-4"
                            onClick={() => navigate("/wefit/login")}
                        >
                            Sign In
                        </button>
                        <button
                            type="button" 
                            className="btn btn-dark px-4 py-2"
                            onClick={() => navigate("/wefit/dashboard")}
                        >
                            Sign Up Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
