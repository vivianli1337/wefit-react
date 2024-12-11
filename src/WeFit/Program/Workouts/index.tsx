// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaTrash, FaPlus } from "react-icons/fa";

// interface Workout {
//     _id: string;
//     name: string;
//     details: string;
//     startDate: string;
//     endDate: string;
//     completed: boolean;
// }

// const initialWorkouts: Workout[] = [
//     {
//         _id: "1",
//         name: "Workout 1",
//         details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         startDate: "2023-12-01",
//         endDate: "2023-12-31",
//         completed: false,
//     },
//     {
//         _id: "2",
//         name: "Workout 2",
//         details: "Another great workout for strength training.",
//         startDate: "2023-12-01",
//         endDate: "2023-12-31",
//         completed: false,
//     },
// ];

// export default function Workouts() {
//     const [workouts, setWorkouts] = useState<Workout[]>(initialWorkouts);
//     const navigate = useNavigate();

//     const toggleComplete = (id: string) => {
//         setWorkouts((prev) =>
//             prev.map((workout) =>
//                 workout._id === id ? { ...workout, completed: !workout.completed } : workout
//             )
//         );
//     };

//     const deleteWorkout = (id: string) => {
//         // Remove the workout from the state
//         setWorkouts((prev) => prev.filter((workout) => workout._id !== id));
//     };

//     const addWorkout = () => {
//         navigate(`/wefit/program/${workouts[0]?._id}/workouts/new`); // Navigate to the add workout editor
//     };

//     const goToWorkout = (id: string) => {
//         navigate(`/wefit/program/${id}/workouts/${id}`); // Adjusted URL for navigation
//     };

//     return (
//         <div className="container">
//             {/* Add Workout Button */}
//             <div className="d-flex justify-content-end mb-3">
//                 <FaPlus
//                     className="text-primary"
//                     style={{ cursor: "pointer", fontSize: "1.5rem" }}
//                     title="Add Workout"
//                     onClick={addWorkout}
//                 />
//             </div>

//             <ul className="list-group">
//                 {workouts.map((workout) => (
//                     <li
//                         key={workout._id}
//                         className="list-group-item d-flex justify-content-between align-items-center"
//                         style={{
//                             backgroundColor: workout.completed ? "#f0f8ff" : "#fff",
//                             border: "1px solid #ddd",
//                             borderRadius: "8px",
//                             marginBottom: "10px",
//                             padding: "15px",
//                         }}
//                     >
//                         <div onClick={() => goToWorkout(workout._id)} style={{ cursor: "pointer", flex: 1 }}>
//                             <h5>{workout.name}</h5>
//                             <p className="mb-1">{workout.details}</p>
//                             <p className="mb-0">
//                                 <b>From:</b> {workout.startDate} <b>To:</b> {workout.endDate}
//                             </p>
//                         </div>
//                         <div className="d-flex align-items-center">
//                             <input
//                                 type="checkbox"
//                                 checked={workout.completed}
//                                 onChange={(e) => {
//                                     e.stopPropagation(); // Prevent navigation on checkbox click
//                                     toggleComplete(workout._id);
//                                 }}
//                                 style={{
//                                     width: "24px",
//                                     height: "24px",
//                                     borderRadius: "50%",
//                                     cursor: "pointer",
//                                     marginRight: "15px",
//                                 }}
//                             />
//                             <FaTrash
//                                 style={{
//                                     fontSize: "1.5rem",
//                                     color: "red",
//                                     cursor: "pointer",
//                                 }}
//                                 title="Delete Workout"
//                                 onClick={(e) => {
//                                     e.stopPropagation(); // Prevent navigation on trash icon click
//                                     deleteWorkout(workout._id);
//                                 }}
//                             />
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// import React, { useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { FaTrash, FaPlus } from "react-icons/fa";
// import { setWorkouts, toggleWorkoutCompletion, deleteWorkout } from "./reducer";

// const mockWorkouts = [
//     {
//         _id: "1",
//         name: "Workout 1",
//         details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         startDate: "2023-12-01",
//         endDate: "2023-12-31",
//         completed: false,
//     },
//     {
//         _id: "2",
//         name: "Workout 2",
//         details: "Another great workout for strength training.",
//         startDate: "2023-12-01",
//         endDate: "2023-12-31",
//         completed: false,
//     },
// ];

// export default function Workouts() {
//     const { programId } = useParams<{ programId: string }>();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const { workouts } = useSelector((state: any) => state.workouts);

//     useEffect(() => {
//         // Load mock workouts into Redux store on component mount
//         if (workouts.length === 0) {
//             dispatch(setWorkouts(mockWorkouts));
//         }
//     }, [dispatch, workouts]);

//     const toggleComplete = (id: string) => {
//         dispatch(toggleWorkoutCompletion(id));
//     };

//     const handleDeleteWorkout = (id: string) => {
//         dispatch(deleteWorkout(id));
//     };

//     const addWorkout = () => {
//         navigate(`/wefit/program/${programId}/workouts/new`);
//     };

//     const goToWorkout = (id: string) => {
//         navigate(`/wefit/program/${programId}/workouts/${id}`);
//     };

//     return (
//         <div className="container">
//             {/* Add Workout Button */}
//             <div className="d-flex justify-content-end mb-3">
//                 <FaPlus
//                     className="text-primary"
//                     style={{ cursor: "pointer", fontSize: "1.5rem" }}
//                     title="Add Workout"
//                     onClick={addWorkout}
//                 />
//             </div>

//             <ul className="list-group">
//                 {workouts.map((workout: any) => (
//                     <li
//                         key={workout._id}
//                         className="list-group-item d-flex justify-content-between align-items-center"
//                         style={{
//                             backgroundColor: workout.completed ? "#f0f8ff" : "#fff",
//                             border: "1px solid #ddd",
//                             borderRadius: "8px",
//                             marginBottom: "10px",
//                             padding: "15px",
//                         }}
//                     >
//                         <div onClick={() => goToWorkout(workout._id)} style={{ cursor: "pointer", flex: 1 }}>
//                             <h5>{workout.name}</h5>
//                             <p className="mb-1">{workout.details}</p>
//                             <p className="mb-0">
//                                 <b>From:</b> {workout.startDate} <b>To:</b> {workout.endDate}
//                             </p>
//                         </div>
//                         <div className="d-flex align-items-center">
//                             <input
//                                 type="checkbox"
//                                 checked={workout.completed}
//                                 onChange={() => toggleComplete(workout._id)}
//                                 style={{
//                                     width: "24px",
//                                     height: "24px",
//                                     borderRadius: "50%",
//                                     cursor: "pointer",
//                                     marginRight: "15px",
//                                 }}
//                             />
//                             <FaTrash
//                                 style={{
//                                     fontSize: "1.5rem",
//                                     color: "red",
//                                     cursor: "pointer",
//                                 }}
//                                 title="Delete Workout"
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     handleDeleteWorkout(workout._id);
//                                 }}
//                             />
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash, FaPlus } from "react-icons/fa";
import { setWorkouts, toggleWorkoutCompletion, deleteWorkout } from "./workoutReducer";

const mockWorkouts = [
    {
        _id: "1",
        exercises: [], // Added exercises property
        name: "Workout 1",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        startDate: "2023-12-01",
        endDate: "2023-12-31",
        completed: false,
    },
    {
        _id: "2",
        exercises: [], // Added exercises property
        name: "Workout 2",
        details: "Another great workout for strength training.",
        startDate: "2023-12-01",
        endDate: "2023-12-31",
        completed: false,
    },
];

export default function Workouts() {
    const { programId } = useParams<{ programId: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { workouts } = useSelector((state: any) => state.workouts);

    const [searchTerm, setSearchTerm] = useState(""); // State for search input

    useEffect(() => {
        // Load mock workouts into Redux store on component mount
        if (workouts.length === 0) {
            dispatch(setWorkouts(mockWorkouts));
        }
    }, [dispatch, workouts]);

    const toggleComplete = (id: string) => {
        dispatch(toggleWorkoutCompletion(id));
    };

    const handleDeleteWorkout = (id: string) => {
        dispatch(deleteWorkout(id));
    };

    const addWorkout = () => {
        navigate(`/wefit/program/${programId}/workouts/new`);
    };

    const goToWorkout = (id: string) => {
        navigate(`/wefit/program/${programId}/workouts/${id}`);
    };

    // Filter workouts based on search term
    const filteredWorkouts = workouts.filter((workout: any) =>
        workout.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            {/* Add Workout and Search Bar */}
            <div className="d-flex justify-content-between mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search workouts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ flex: 1, marginRight: "10px" }}
                />
                <FaPlus
                    className="text-primary"
                    style={{ cursor: "pointer", fontSize: "1.5rem" }}
                    title="Add Workout"
                    onClick={addWorkout}
                />
            </div>

            <ul className="list-group">
                {filteredWorkouts.length > 0 ? (
                    filteredWorkouts.map((workout: any) => (
                        <li
                            key={workout._id}
                            className="list-group-item d-flex justify-content-between align-items-center"
                            style={{
                                backgroundColor: workout.completed ? "#f0f8ff" : "#fff",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                marginBottom: "10px",
                                padding: "15px",
                            }}
                        >
                            <div onClick={() => goToWorkout(workout._id)} style={{ cursor: "pointer", flex: 1 }}>
                                <h5>{workout.name}</h5>
                                <p className="mb-1">{workout.details}</p>
                                <p className="mb-0">
                                    <b>From:</b> {workout.startDate} <b>To:</b> {workout.endDate}
                                </p>
                            </div>
                            <div className="d-flex align-items-center">
                                <input
                                    type="checkbox"
                                    checked={workout.completed}
                                    onChange={() => toggleComplete(workout._id)}
                                    style={{
                                        width: "24px",
                                        height: "24px",
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                        marginRight: "15px",
                                    }}
                                />
                                <FaTrash
                                    style={{
                                        fontSize: "1.5rem",
                                        color: "red",
                                        cursor: "pointer",
                                    }}
                                    title="Delete Workout"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteWorkout(workout._id);
                                    }}
                                />
                            </div>
                        </li>
                    ))
                ) : (
                    <li className="list-group-item">No workouts found.</li>
                )}
            </ul>
        </div>
    );
}
