import React from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";


export default function SignInPage() {
    const navigate = useNavigate();
    return (
        <div className="container my-5">
            <div className="row">
                
                <div className="col-md-7">
                    <h1 className="fw-bold">Welcome Back!</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                id="username"
                                placeholder="Enter Username"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control rounded-pill"
                                id="password"
                                placeholder="Enter Password"
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-dark w-100 rounded-pill"
                        onClick={() => navigate("/wefit/dashboard")}>
                            Sign In
                        </button>
                    </form>
                </div>

                {/* Sign Up Section */}
                <div className="col-md-5">
                    <div className="bg-light p-4 rounded">
                        <h3 className="fw-bold">New Here?</h3>
                        <p>Sign up now to get free fitness exercises!</p>
                        <button
                            type="button" 
                            className="btn btn-outline-dark w-100 rounded-pill"
                            onClick={() => navigate("/wefit/signup")}
                        >
                        Sign Up Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}