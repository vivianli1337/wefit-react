// import React from "react";
// import "../style.css";
// import { useNavigate } from "react-router-dom";


// export default function SignUpPage() {
//     const navigate = useNavigate();
//     return (
//         <div className="signup-page">
//             {/* Sign Up Form */}
//             <div className="container text-center mt-5">
//                 <h1 className="fw-bold">Welcome to WeFit!</h1>
//                 <form className="mt-4">
//                     <div className="mb-3 text-start">
//                         <label className="form-label">Username</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Enter Username"
//                         />
//                     </div>
//                     <div className="mb-3 text-start">
//                         <label className="form-label">Password</label>
//                         <input
//                             type="password"
//                             className="form-control"
//                             placeholder="Enter Password"
//                         />
//                     </div>
//                     <div className="mb-3 text-start">
//                         <label className="form-label">First Name</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Enter First Name"
//                         />
//                     </div>
//                     <div className="mb-3 text-start">
//                         <label className="form-label">Last Name</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Enter Last Name"
//                         />
//                     </div>
//                     <div className="mb-3 text-start">
//                         <label className="form-label">Email</label>
//                         <input
//                             type="email"
//                             className="form-control"
//                             placeholder="Enter email address"
//                         />
//                     </div>
//                     <div className="mb-3 text-start">
//                         <label className="form-label">Gender</label>
//                         <select className="form-select">
//                             <option>Select Gender</option>
//                             <option value="male">Male</option>
//                             <option value="female">Female</option>
//                             <option value="other">Other</option>
//                         </select>
//                     </div>
//                     <div className="mb-3 text-start">
//                         <label className="form-label">Role</label>
//                         <select className="form-select">
//                             <option>Select Role</option>
//                             <option value="trainee">Trainee</option>
//                             <option value="trainer">Trainer</option>
//                         </select>
//                     </div>

//                     {/* Buttons */}
//                     <div className="d-flex justify-content-center mt-4">
//                         <button
//                             type="button"
//                             className="btn btn-outline-dark me-3 px-4"
//                             onClick={() => navigate("/wefit/login")}
//                         >
//                             Sign In
//                         </button>
//                         <button
//                             type="button" 
//                             className="btn btn-dark px-4 py-2"
//                             onClick={() => navigate("/wefit/dashboard")}
//                         >
//                             Sign Up Now
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

import React, { useState } from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Signup() {
    const [user, setUser] = useState<any>({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signup = async () => {
        try {
            if (
                !user.username ||
                !user.password ||
                !user.email ||
                !user.firstName ||
                !user.lastName ||
                !user.gender ||
                !user.role
            ) {
                alert("All fields are required.");
                return;
            }
    
            // Call the signup API with the complete user object
            const newUser = await client.signup(user);
            dispatch(setCurrentUser(newUser));
            navigate("/wefit/dashboard");
        } catch (error) {
            console.error("Sign-up failed:", error);
            alert("Sign-up failed. Please check your input and try again.");
        }
    };
    

    return (
        <div className="signup-page">
            {/* Sign Up Form */}
            <div className="container text-center mt-5">
                <h1 className="fw-bold">Welcome to WeFit!</h1>
                <form className="mt-4">
                    {/* Username */}
                    <div className="mb-3 text-start">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Username"
                            value={user.username || ""}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-3 text-start">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            value={user.password || ""}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>

                    {/* First Name */}
                    <div className="mb-3 text-start">
                        <label className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter First Name"
                            value={user.firstName || ""}
                            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                        />
                    </div>

                    {/* Last Name */}
                    <div className="mb-3 text-start">
                        <label className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Last Name"
                            value={user.lastName || ""}
                            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-3 text-start">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email address"
                            value={user.email || ""}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>

                   {/* Gender */}
<div className="mb-3 text-start">
    <label className="form-label">Gender</label>
    <select
        className="form-select"
        value={user.gender || ""}
        onChange={(e) => setUser({ ...user, gender: e.target.value })}
    >
        <option>Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
    </select>
</div>

{/* Role */}
<div className="mb-3 text-start">
    <label className="form-label">Role</label>
    <select
        className="form-select"
        value={user.role || ""}
        onChange={(e) => setUser({ ...user, role: e.target.value })}
    >
        <option>Select Role</option>
        <option value="TRAINEE">Trainee</option>
        <option value="TRAINER">Trainer</option>
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
                            onClick={signup}
                        >
                            Sign Up Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
