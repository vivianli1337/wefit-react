
// // import { useParams, useNavigate } from "react-router";
// // import { Link } from "react-router-dom";
// // import { useEffect, useState } from "react";

// // // Mock API Service
// // const mockWorkoutAPI = {
// //   fetchWorkouts: async () => {
// //     // Simulate fetching data
// //     return [
// //       {
// //         _id: "1",
// //         name: "Morning Cardio",
// //         videoLink: "https://youtube.com/example",
// //         description: "A great morning cardio routine.",
// //         startDate: "2023-12-01",
// //         endDate: "2023-12-31",
// //       },
// //     ];
// //   },
// //   createWorkout: async (workout: any) => {
// //     console.log("Created workout:", workout);
// //     return workout;
// //   },
// //   updateWorkout: async (workout: any) => {
// //     console.log("Updated workout:", workout);
// //     return workout;
// //   },
// // };

// // interface Workout {
// //   _id: string;
// //   name: string;
// //   videoLink: string;
// //   description: string;
// //   startDate: string;
// //   endDate: string;
// // }

// // export default function WorkoutEditor() {
// //   const { workoutId, programId } = useParams<{ workoutId: string; programId: string }>();
// //   const navigate = useNavigate();
// //   const [workouts, setWorkouts] = useState<Workout[]>([]);
// //   const [workout, setWorkout] = useState<Workout>({
// //     _id: new Date().getTime().toString(),
// //     name: "",
// //     videoLink: "",
// //     description: "",
// //     startDate: "",
// //     endDate: "",
// //   });

// //   // Fetch workouts when the component mounts
// //   useEffect(() => {
// //     const fetchWorkouts = async () => {
// //       const data = await mockWorkoutAPI.fetchWorkouts();
// //       setWorkouts(data);
// //     };
// //     fetchWorkouts();
// //   }, []);

// //   // Populate the form if editing an existing workout
// //   useEffect(() => {
// //     if (workoutId !== "new") {
// //       const existingWorkout = workouts.find((w) => w._id === workoutId);
// //       if (existingWorkout) setWorkout(existingWorkout);
// //     }
// //   }, [workoutId, workouts]);

// //   const saveWorkout = async () => {
// //     if (workoutId === "new") {
// //       await mockWorkoutAPI.createWorkout(workout);
// //     } else {
// //       await mockWorkoutAPI.updateWorkout(workout);
// //     }

// //     // Navigate back to the workouts list
// //     navigate(`/wefit/program/${programId}/workouts`);
// //   };

// //   return (
// //     <div className="container">
// //         <br />
// //       <h3>{workoutId === "new" ? "Adding Workout" : "Editing Workout"}</h3>
// //       <br/>
// //       <div>
// //         <div className="form-group mb-3">
// //           <label htmlFor="workout-name">Name</label>
// //           <input
// //             id="workout-name"
// //             value={workout.name}
// //             className="form-control"
// //             onChange={(e) => setWorkout({ ...workout, name: e.target.value })}
// //           />
// //         </div>
// //         <div className="form-group mb-3">
// //           <label htmlFor="video-link">Video</label>
// //           <input
// //             id="video-link"
// //             value={workout.videoLink}
// //             className="form-control"
// //             onChange={(e) => setWorkout({ ...workout, videoLink: e.target.value })}
// //           />
// //         </div>
// //         <div className="form-group mb-3">
// //           <label htmlFor="description">Description</label>
// //           <textarea
// //             id="description"
// //             value={workout.description}
// //             cols={40}
// //             rows={5}
// //             className="form-control"
// //             onChange={(e) => setWorkout({ ...workout, description: e.target.value })}
// //           />
// //         </div>
// //         <div className="form-group mb-3">
// //           <label htmlFor="start-date">From</label>
// //           <input
// //             type="date"
// //             id="start-date"
// //             value={workout.startDate}
// //             className="form-control"
// //             onChange={(e) => setWorkout({ ...workout, startDate: e.target.value })}
// //           />
// //         </div>
// //         <div className="form-group mb-3">
// //           <label htmlFor="end-date">To</label>
// //           <input
// //             type="date"
// //             id="end-date"
// //             value={workout.endDate}
// //             className="form-control"
// //             onChange={(e) => setWorkout({ ...workout, endDate: e.target.value })}
// //           />
// //         </div>
// //         <div className="d-flex justify-content-end">
// //           <Link to={`/wefit/program/${programId}/workouts`} className="btn btn-secondary me-2">Cancel</Link>
// //           <button className="btn btn-success" onClick={saveWorkout}>
// //             {workoutId === "new" ? "Add" : "Save"}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // import { useParams, useNavigate } from "react-router";
// // import { Link } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useEffect, useState } from "react";
// // import { setWorkouts, addWorkout, updateWorkout } from "./reducer";

// // // Mock API client
// // const mockWorkoutsClient = {
// //     fetchWorkoutsForProgram: async (programId: string) => {
// //         // Simulated mock data
// //         return [
// //             {
// //                 _id: "1",
// //                 name: "Morning Cardio",
// //                 details: "Cardio workout to start your day.",
// //                 startDate: "2023-12-01",
// //                 endDate: "2023-12-31",
// //                 completed: false,
// //             },
// //             {
// //                 _id: "2",
// //                 name: "Strength Training",
// //                 details: "Build strength with this routine.",
// //                 startDate: "2023-12-01",
// //                 endDate: "2023-12-31",
// //                 completed: false,
// //             },
// //         ];
// //     },
// //     createWorkout: async (programId: string, workout: any) => {
// //         // Simulate creating a new workout
// //         return { ...workout, _id: new Date().getTime().toString() };
// //     },
// //     updateWorkout: async (workout: any) => {
// //         // Simulate updating a workout
// //         return workout;
// //     },
// // };

// // export default function WorkoutEditor() {
// //     const { workoutId, programId } = useParams<{ workoutId: string; programId: string }>();
// //     const { workouts } = useSelector((state: any) => state.workouts);
// //     const dispatch = useDispatch();
// //     const navigate = useNavigate();

// //     const [workout, setWorkout] = useState({
// //         _id: new Date().getTime().toString(),
// //         name: "",
// //         details: "",
// //         startDate: "",
// //         endDate: "",
// //         completed: false,
// //     });

// //     // Fetch workouts for the program on component mount
// //     useEffect(() => {
// //         const fetchWorkouts = async () => {
// //             if (programId) {
// //                 const fetchedWorkouts = await mockWorkoutsClient.fetchWorkoutsForProgram(programId);
// //                 dispatch(setWorkouts(fetchedWorkouts));
// //             }
// //         };
// //         fetchWorkouts();
// //     }, [programId, dispatch]);

// //     // Populate the form if editing an existing workout
// //     useEffect(() => {
// //         if (workoutId !== "new") {
// //             const existingWorkout = workouts.find((w: any) => w._id === workoutId);
// //             if (existingWorkout) setWorkout(existingWorkout);
// //         }
// //     }, [workoutId, workouts]);

// //     const saveWorkout = async () => {
// //         if (programId) {
// //             if (workoutId === "new") {
// //                 const newWorkout = await mockWorkoutsClient.createWorkout(programId, workout);
// //                 dispatch(addWorkout(newWorkout));
// //             } else {
// //                 await mockWorkoutsClient.updateWorkout(workout);
// //                 dispatch(updateWorkout(workout));
// //             }
// //             navigate(`/wefit/program/${programId}/workouts`);
// //         }
// //     };

// //     return (
// //         <div className="container">
// //             <h3>{workoutId === "new" ? "Add Workout" : "Edit Workout"}</h3>
// //             <div>
// //                 <div className="form-group mb-3">
// //                     <label htmlFor="workout-name">Workout Name</label>
// //                     <input
// //                         id="workout-name"
// //                         value={workout.name}
// //                         className="form-control"
// //                         onChange={(e) => setWorkout({ ...workout, name: e.target.value })}
// //                     />
// //                 </div>
// //                 <div className="form-group mb-3">
// //                     <label htmlFor="workout-details">Details</label>
// //                     <textarea
// //                         id="workout-details"
// //                         value={workout.details}
// //                         cols={40}
// //                         rows={5}
// //                         className="form-control"
// //                         onChange={(e) => setWorkout({ ...workout, details: e.target.value })}
// //                     />
// //                 </div>
// //                 <div className="form-group mb-3">
// //                     <label htmlFor="start-date">Start Date</label>
// //                     <input
// //                         type="date"
// //                         id="start-date"
// //                         value={workout.startDate}
// //                         className="form-control"
// //                         onChange={(e) => setWorkout({ ...workout, startDate: e.target.value })}
// //                     />
// //                 </div>
// //                 <div className="form-group mb-3">
// //                     <label htmlFor="end-date">End Date</label>
// //                     <input
// //                         type="date"
// //                         id="end-date"
// //                         value={workout.endDate}
// //                         className="form-control"
// //                         onChange={(e) => setWorkout({ ...workout, endDate: e.target.value })}
// //                     />
// //                 </div>
// //                 <div className="d-flex justify-content-end">
// //                     <Link to={`/wefit/program/${programId}/workouts`} className="btn btn-secondary me-2">
// //                         Cancel
// //                     </Link>
// //                     <button className="btn btn-success" onClick={saveWorkout}>
// //                         {workoutId === "new" ? "Add" : "Save"}
// //                     </button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // import { useParams, useNavigate } from "react-router";
// // import { Link } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useEffect, useState } from "react";
// // import { setWorkouts, addWorkout, updateWorkout } from "./reducer";
// // import { RootState } from "../../store";

// // // Mock API client
// // const mockWorkoutsClient = {
// //     fetchWorkoutsForProgram: async (programId: string) => {
// //         // Simulated mock data
// //         return [
// //             {
// //                 _id: "1",
// //                 name: "Morning Cardio",
// //                 details: "Cardio workout to start your day.",
// //                 startDate: "2023-12-01",
// //                 endDate: "2023-12-31",
// //                 completed: false,
// //             },
// //             {
// //                 _id: "2",
// //                 name: "Strength Training",
// //                 details: "Build strength with this routine.",
// //                 startDate: "2023-12-01",
// //                 endDate: "2023-12-31",
// //                 completed: false,
// //             },
// //         ];
// //     },
// //     createWorkout: async (programId: string, workout: any) => {
// //         // Simulate creating a new workout
// //         return { ...workout, _id: new Date().getTime().toString() };
// //     },
// //     updateWorkout: async (workout: any) => {
// //         // Simulate updating a workout
// //         return workout;
// //     },
// // };

// // export default function WorkoutEditor() {
// //     const { workoutId, programId } = useParams<{ workoutId: string; programId: string }>();
// //     const { workouts } = useSelector((state: RootState) => state.workouts);
// //     const dispatch = useDispatch();
// //     const navigate = useNavigate();

// //     // Local state for the form
// //     const [workout, setWorkout] = useState({
// //         _id: "",
// //         name: "",
// //         details: "",
// //         startDate: "",
// //         endDate: "",
// //         completed: false,
// //     });

// //     // Fetch workouts when the component mounts
// //     useEffect(() => {
// //         const fetchWorkouts = async () => {
// //             if (!programId) {
// //                 console.error("Missing programId");
// //                 return;
// //             }

// //             try {
// //                 const fetchedWorkouts = await mockWorkoutsClient.fetchWorkoutsForProgram(programId);
// //                 dispatch(setWorkouts(fetchedWorkouts));
// //             } catch (error) {
// //                 console.error("Failed to fetch workouts:", error);
// //             }
// //         };
// //         fetchWorkouts();
// //     }, [programId, dispatch]);

// //     // Populate the form with existing workout data if editing
// //     useEffect(() => {
// //         if (workoutId !== "new") {
// //             const existingWorkout = workouts.find((w: any) => w._id === workoutId);
// //             if (existingWorkout) {
// //                 setWorkout(existingWorkout);
// //             } else {
// //                 console.error(`Workout with ID ${workoutId} not found.`);
// //             }
// //         }
// //     }, [workoutId, workouts]);

// //     // Save the workout (add new or update existing)
// //     const saveWorkout = async () => {
// //         if (!programId) return;

// //         if (workoutId === "new") {
// //             const newWorkout = await mockWorkoutsClient.createWorkout(programId, workout);
// //             dispatch(addWorkout(newWorkout));
// //         } else {
// //             await mockWorkoutsClient.updateWorkout(workout);
// //             dispatch(updateWorkout(workout));
// //         }

// //         navigate(`/wefit/program/${programId}/workouts`);
// //     };

// //     return (
// //         <div className="container">
// //             <h3>{workoutId === "new" ? "Add Workout" : "Edit Workout"}</h3>
// //             <div>
// //                 {/* Workout Name */}
// //                 <div className="form-group mb-3">
// //                     <label htmlFor="workout-name">Workout Name</label>
// //                     <input
// //                         id="workout-name"
// //                         value={workout.name}
// //                         className="form-control"
// //                         onChange={(e) => setWorkout({ ...workout, name: e.target.value })}
// //                     />
// //                 </div>

// //                 {/* Workout Details */}
// //                 <div className="form-group mb-3">
// //                     <label htmlFor="workout-details">Details</label>
// //                     <textarea
// //                         id="workout-details"
// //                         value={workout.details}
// //                         cols={40}
// //                         rows={5}
// //                         className="form-control"
// //                         onChange={(e) => setWorkout({ ...workout, details: e.target.value })}
// //                     />
// //                 </div>

// //                 {/* Start Date */}
// //                 <div className="form-group mb-3">
// //                     <label htmlFor="start-date">Start Date</label>
// //                     <input
// //                         type="date"
// //                         id="start-date"
// //                         value={workout.startDate}
// //                         className="form-control"
// //                         onChange={(e) => setWorkout({ ...workout, startDate: e.target.value })}
// //                     />
// //                 </div>

// //                 {/* End Date */}
// //                 <div className="form-group mb-3">
// //                     <label htmlFor="end-date">End Date</label>
// //                     <input
// //                         type="date"
// //                         id="end-date"
// //                         value={workout.endDate}
// //                         className="form-control"
// //                         onChange={(e) => setWorkout({ ...workout, endDate: e.target.value })}
// //                     />
// //                 </div>

// //                 {/* Action Buttons */}
// //                 <div className="d-flex justify-content-end">
// //                     <Link to={`/wefit/program/${programId}/workouts`} className="btn btn-secondary me-2">
// //                         Cancel
// //                     </Link>
// //                     <button className="btn btn-success" onClick={saveWorkout}>
// //                         {workoutId === "new" ? "Add" : "Save"}
// //                     </button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // import { useParams, useNavigate, Link } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useEffect, useState } from "react";
// // import { addWorkout, updateWorkout } from "./reducer";

// // export default function WorkoutEditor() {
// //     const { workoutId, programId } = useParams<{ workoutId: string; programId: string }>();
// //     const { workouts } = useSelector((state: any) => state.workouts);
// //     const dispatch = useDispatch();
// //     const navigate = useNavigate();

// //     const [workout, setWorkout] = useState({
// //         _id: "",
// //         name: "",
// //         details: "",
// //         startDate: "",
// //         endDate: "",
// //         completed: false,
// //     });

// //     useEffect(() => {
// //         if (workoutId !== "new") {
// //             const existingWorkout = workouts.find((w: any) => w._id === workoutId);
// //             if (existingWorkout) {
// //                 setWorkout(existingWorkout);
// //             }
// //         }
// //     }, [workoutId, workouts]);

// //     const handleInputChange = (field: keyof typeof workout, value: string) => {
// //         setWorkout((prevWorkout) => ({ ...prevWorkout, [field]: value }));
// //     };

// //     const saveWorkout = () => {
// //         if (workout.name.trim() === "") {
// //             alert("Workout name cannot be empty!"); // Basic validation
// //             return;
// //         }

// //         if (workoutId === "new") {
// //             const newWorkout = { ...workout, _id: new Date().getTime().toString() };
// //             dispatch(addWorkout(newWorkout));
// //         } else {
// //             dispatch(updateWorkout(workout));
// //         }

// //         console.log("Workout saved successfully:", workout); // Debugging log
// //         navigate(`/wefit/program/${programId}/workouts`);
// //     };

// //     return (
// //         <div className="container">
// //             <h3>{workoutId === "new" ? "Add Workout" : "Edit Workout"}</h3>
// //             <div>
// //                 <div className="form-group mb-3">
// //                     <label htmlFor="workout-name">Workout Name</label>
// //                     <input
// //                         id="workout-name"
// //                         value={workout.name}
// //                         className="form-control"
// //                         onChange={(e) => handleInputChange("name", e.target.value)}
// //                     />
// //                 </div>
// //                 <div className="form-group mb-3">
// //                     <label htmlFor="workout-details">Details</label>
// //                     <textarea
// //                         id="workout-details"
// //                         value={workout.details}
// //                         className="form-control"
// //                         onChange={(e) => handleInputChange("details", e.target.value)}
// //                     />
// //                 </div>
// //                 <div className="form-group mb-3">
// //                     <label htmlFor="start-date">Start Date</label>
// //                     <input
// //                         type="date"
// //                         id="start-date"
// //                         value={workout.startDate}
// //                         className="form-control"
// //                         onChange={(e) => handleInputChange("startDate", e.target.value)}
// //                     />
// //                 </div>
// //                 <div className="form-group mb-3">
// //                     <label htmlFor="end-date">End Date</label>
// //                     <input
// //                         type="date"
// //                         id="end-date"
// //                         value={workout.endDate}
// //                         className="form-control"
// //                         onChange={(e) => handleInputChange("endDate", e.target.value)}
// //                     />
// //                 </div>
// //                 <div className="d-flex justify-content-end">
// //                     <Link to={`/wefit/program/${programId}/workouts`} className="btn btn-secondary me-2">
// //                         Cancel
// //                     </Link>
// //                     <button className="btn btn-success" onClick={saveWorkout}>
// //                         {workoutId === "new" ? "Add" : "Save"}
// //                     </button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// import { useParams, useNavigate, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { addWorkout, updateWorkout } from "./reducer";

// export default function WorkoutEditor() {
//     const { workoutId, programId } = useParams<{ workoutId: string; programId: string }>();
//     const { workouts } = useSelector((state: any) => state.workouts);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [workout, setWorkout] = useState({
//         _id: "",
//         name: "",
//         details: "",
//         startDate: "",
//         endDate: "",
//         completed: false,
//     });

//     useEffect(() => {
//         console.log("workoutId:", workoutId); // Debugging log
//         if (workoutId === "new") {
//             // Reset the form for a new workout
//             setWorkout({
//                 _id: "",
//                 name: "",
//                 details: "",
//                 startDate: "",
//                 endDate: "",
//                 completed: false,
//             });
//         } else {
//             // Populate the form with existing workout data
//             const existingWorkout = workouts.find((w: any) => w._id === workoutId);
//             if (existingWorkout) {
//                 setWorkout(existingWorkout);
//             }
//         }
//     }, [workoutId, workouts]);

//     const handleInputChange = (field: keyof typeof workout, value: string) => {
//         setWorkout((prevWorkout) => ({ ...prevWorkout, [field]: value }));
//     };

//     const saveWorkout = () => {
//         if (workout.name.trim() === "") {
//             alert("Workout name cannot be empty!"); // Basic validation
//             return;
//         }

//         if (workoutId === "new") {
//             const newWorkout = { ...workout, _id: new Date().getTime().toString() };
//             dispatch(addWorkout(newWorkout));
//         } else {
//             dispatch(updateWorkout(workout));
//         }

//         console.log("Workout saved successfully:", workout); // Debugging log
//         navigate(`/wefit/program/${programId}/workouts`);
//     };

//     return (
//         <div className="container">
//             <h3>{workoutId === "new" ? "Add Workout" : "Edit Workout"}</h3>
//             <div>
//                 <div className="form-group mb-3">
//                     <label htmlFor="workout-name">Workout Name</label>
//                     <input
//                         id="workout-name"
//                         value={workout.name}
//                         className="form-control"
//                         onChange={(e) => handleInputChange("name", e.target.value)}
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label htmlFor="workout-details">Details</label>
//                     <textarea
//                         id="workout-details"
//                         value={workout.details}
//                         className="form-control"
//                         onChange={(e) => handleInputChange("details", e.target.value)}
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label htmlFor="start-date">Start Date</label>
//                     <input
//                         type="date"
//                         id="start-date"
//                         value={workout.startDate}
//                         className="form-control"
//                         onChange={(e) => handleInputChange("startDate", e.target.value)}
//                     />
//                 </div>
//                 <div className="form-group mb-3">
//                     <label htmlFor="end-date">End Date</label>
//                     <input
//                         type="date"
//                         id="end-date"
//                         value={workout.endDate}
//                         className="form-control"
//                         onChange={(e) => handleInputChange("endDate", e.target.value)}
//                     />
//                 </div>
//                 <div className="d-flex justify-content-end">
//                     <Link to={`/wefit/program/${programId}/workouts`} className="btn btn-secondary me-2">
//                         Cancel
//                     </Link>
//                     <button className="btn btn-success" onClick={saveWorkout}>
//                         {workoutId === "new" ? "Add" : "Save"}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }
