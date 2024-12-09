// import React from "react";
// import "../style.css";
// import { useNavigate } from "react-router-dom";


// export default function SignInPage() {
//     const navigate = useNavigate();
//     return (
//         <div className="container my-5">
//             <div className="row">
                
//                 <div className="col-md-7">
//                     <h1 className="fw-bold">Welcome Back!</h1>
//                     <form>
//                         <div className="mb-3">
//                             <label htmlFor="username" className="form-label">
//                                 Username
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control rounded-pill"
//                                 id="username"
//                                 placeholder="Enter Username"
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="password" className="form-label">
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 className="form-control rounded-pill"
//                                 id="password"
//                                 placeholder="Enter Password"
//                             />
//                         </div>
                        
//                         <button type="submit" className="btn btn-dark w-100 rounded-pill"
//                         onClick={() => navigate("/wefit/dashboard")}>
//                             Sign In
//                         </button>
//                     </form>
//                 </div>

//                 {/* Sign Up Section */}
//                 <div className="col-md-5">
//                     <div className="bg-light p-4 rounded">
//                         <h3 className="fw-bold">New Here?</h3>
//                         <p>Sign up now to get free fitness exercises!</p>
//                         <button
//                             type="button" 
//                             className="btn btn-outline-dark w-100 rounded-pill"
//                             onClick={() => navigate("/wefit/signup")}
//                         >
//                         Sign Up Now
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState } from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signin() {
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Mocked user data
    const mockUsers = [
        {
            username: "johndoe",
            password: "password123",
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@example.com",
            gender: "Male",
            role: "Trainer",
        },
        {
            username: "janedoe",
            password: "securepass",
            firstName: "Jane",
            lastName: "Doe",
            email: "janedoe@example.com",
            gender: "Female",
            role: "Trainee",
        },
    ];

    // Mocked sign-in function
    const signin = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent form submission reload
        const user = mockUsers.find(
            (u) =>
                u.username === credentials.username &&
                u.password === credentials.password
        );

        if (!user) {
            alert("Invalid username or password.");
            return;
        }

        // Dispatch the authenticated user to Redux
        dispatch(setCurrentUser(user));

        // Navigate to the dashboard after successful sign-in
        navigate("/wefit/dashboard");
    };

    return (
        <div className="container my-5">
            <div className="row">
                {/* Sign-In Form Section */}
                <div className="col-md-7">
                    <h1 className="fw-bold">Welcome Back!</h1>
                    <form onSubmit={signin}>
                        {/* Username Input */}
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                id="username"
                                placeholder="Enter Username"
                                value={credentials.username || ""}
                                onChange={(e) =>
                                    setCredentials({
                                        ...credentials,
                                        username: e.target.value,
                                    })
                                }
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control rounded-pill"
                                id="password"
                                placeholder="Enter Password"
                                value={credentials.password || ""}
                                onChange={(e) =>
                                    setCredentials({
                                        ...credentials,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>

                        {/* Sign-In Button */}
                        <button
                            type="submit"
                            className="btn btn-dark w-100 rounded-pill"
                        >
                            Sign In
                        </button>
                    </form>
                </div>

                {/* Sign-Up Section */}
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
