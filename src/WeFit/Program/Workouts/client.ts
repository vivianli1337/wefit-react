import axios from "axios";

const axiosWithCredentials = axios.create({
  withCredentials: true, // Ensures cookies are sent with requests
});

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const WORKOUTS_API = `${REMOTE_SERVER}/api/exercises`;

// Fetch all workouts
export const fetchAllWorkouts = async () => {
  const { data } = await axiosWithCredentials.get(WORKOUTS_API);
  return data.map((exercise: any) => transformExerciseToWorkout(exercise));
};

// Fetch a single workout by ID
export const fetchWorkoutById = async (id: string) => {
  const { data } = await axiosWithCredentials.get(`${WORKOUTS_API}/${id}`);
  return transformExerciseToWorkout(data);
};

// Create a new workout
export const createWorkout = async (workout: any) => {
  const { data } = await axiosWithCredentials.post(WORKOUTS_API, workout);
  return transformExerciseToWorkout(data);
};

// Update an existing workout
export const updateWorkout = async (workout: any) => {
  const { data } = await axiosWithCredentials.put(`${WORKOUTS_API}/${workout._id}`, workout);
  return transformExerciseToWorkout(data);
};

// Delete a workout
export const deleteWorkout = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${WORKOUTS_API}/${id}`);
  return data;
};

// Helper to transform exercise (API response) to workout (UI structure)
const transformExerciseToWorkout = (exercise: any) => ({
  _id: exercise._id, // MongoDB ObjectId
  workoutId: exercise.exerciseId, // Map exerciseId to workoutId
  name: exercise.name,
  details: exercise.target || "",
  equipment: exercise.equipment || "None",
  gifUrl: exercise.gifUrl,
  startDate: "",
  endDate: "",
  completed: false,
});