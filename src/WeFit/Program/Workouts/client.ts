import axios from "axios";

const axiosWithCredentials = axios.create({
  withCredentials: true, // Ensures cookies are sent with requests
});

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const WORKOUTS_API = `${REMOTE_SERVER}/api/exercises`;

// Fetch all workouts
export const fetchAllWorkouts = async () => {
  const { data } = await axiosWithCredentials.get(WORKOUTS_API);
  return data.map((exercise: any) => transformExerciseToWorkout(exercise)); // Unchanged
};

// Fetch a single workout by ID
export const fetchWorkoutById = async (id: string) => {
  const { data } = await axiosWithCredentials.get(`${WORKOUTS_API}/${id}`);
  return transformExerciseToWorkout(data); // Unchanged
};

// Create a new workout
export const createWorkout = async (workout: any) => {
  const { data } = await axiosWithCredentials.post(WORKOUTS_API, workout);
  return transformExerciseToWorkout(data); // Unchanged
};

// Update an existing workout
export const updateWorkout = async (workout: any) => {
  const { data } = await axiosWithCredentials.put(`${WORKOUTS_API}/${workout._id}`, workout);
  return transformExerciseToWorkout(data); // Unchanged
};

// Delete a workout
export const deleteWorkout = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${WORKOUTS_API}/${id}`);
  return data; // Unchanged
};

// Fetch exercises by body part (NEW)
export const fetchExercisesByBodyPart = async (bodyPart: string) => {
  const { data } = await axiosWithCredentials.get(`${WORKOUTS_API}/bodyPart/${bodyPart}`); // Added
  return data.map((exercise: any) => transformExercise(exercise)); // Added
};

// Fetch all exercises (NEW)
export const fetchAllExercises = async () => {
  const { data } = await axiosWithCredentials.get(WORKOUTS_API); // Added
  return data.map((exercise: any) => transformExercise(exercise)); // Added
};

// client.ts
export const syncExercisesWithExternalAPI = async () => {
  const { data } = await axiosWithCredentials.post(`${WORKOUTS_API}/sync`);
  return data;
};

// Helper to transform exercise (API response) to UI structure
const transformExercise = (exercise: any) => ({ // NEW
  id: exercise.id, // Matches API response field
  name: exercise.name,
  target: exercise.target,
  equipment: exercise.equipment || "None",
  gifUrl: exercise.gifUrl,
});

// Updated helper to transform API response to workout structure
const transformExerciseToWorkout = (exercise: any) => ({
  _id: exercise._id, // MongoDB ObjectId
  workoutId: exercise.exerciseId, // Map exerciseId to workoutId
  name: exercise.name,
  details: exercise.target || "",
  equipment: exercise.equipment || "None",
  gifUrl: exercise.gifUrl,
  startDate: exercise.startDate || "", // Modified: Ensure compatibility with workouts
  endDate: exercise.endDate || "", // Modified: Ensure compatibility with workouts
  completed: exercise.completed || false, // Modified: Ensure compatibility with workouts
});


// import axios from "axios";

// const axiosWithCredentials = axios.create({
//   withCredentials: true, // Ensures cookies are sent with requests
// });

// const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
// const WORKOUTS_API = `${REMOTE_SERVER}/api/exercises`;

// // Fetch all workouts
// export const fetchAllWorkouts = async () => {
//   const { data } = await axiosWithCredentials.get(WORKOUTS_API);
//   return data.map((exercise: any) => transformExerciseToWorkout(exercise));
// };

// // Fetch a single workout by ID
// export const fetchWorkoutById = async (id: string) => {
//   const { data } = await axiosWithCredentials.get(`${WORKOUTS_API}/${id}`);
//   return transformExerciseToWorkout(data);
// };

// // Create a new workout
// export const createWorkout = async (workout: any) => {
//   const { data } = await axiosWithCredentials.post(WORKOUTS_API, workout);
//   return transformExerciseToWorkout(data);
// };

// // Update an existing workout
// export const updateWorkout = async (workout: any) => {
//   const { data } = await axiosWithCredentials.put(`${WORKOUTS_API}/${workout._id}`, workout);
//   return transformExerciseToWorkout(data);
// };

// // Delete a workout
// export const deleteWorkout = async (id: string) => {
//   const { data } = await axiosWithCredentials.delete(`${WORKOUTS_API}/${id}`);
//   return data;
// };

// // Helper to transform exercise (API response) to workout (UI structure)
// const transformExerciseToWorkout = (exercise: any) => ({
//   _id: exercise._id, // MongoDB ObjectId
//   workoutId: exercise.exerciseId, // Map exerciseId to workoutId
//   name: exercise.name,
//   details: exercise.target || "",
//   equipment: exercise.equipment || "None",
//   gifUrl: exercise.gifUrl,
//   startDate: "",
//   endDate: "",
//   completed: false,
// });

// // import axios from "axios";
// // const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
// // const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

// // export const deleteAssignment = async (assignmentId: string) => {
// //  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
// //  return response.data;
// // };

// // export const updateAssignment = async (assignment: any) => {
// //   const { data } = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
// //   return data;
// // };