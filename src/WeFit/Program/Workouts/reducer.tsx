import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Workout {
    _id: string;
    name: string;
    details: string;
    startDate: string;
    endDate: string;
    completed: boolean;
}

const initialState = {
    workouts: [] as Workout[],
};

const workoutsSlice = createSlice({
    name: "workouts",
    initialState,
    reducers: {
        setWorkouts: (state, action: PayloadAction<Workout[]>) => {
            state.workouts = action.payload;
        },
        addWorkout: (state, action: PayloadAction<Workout>) => {
            console.log("Adding workout:", action.payload);
            state.workouts.push(action.payload);
        },
        deleteWorkout: (state, action: PayloadAction<string>) => {
            state.workouts = state.workouts.filter((w) => w._id !== action.payload);
        },
        updateWorkout: (state, action: PayloadAction<Workout>) => {
            console.log("Updating workout:", action.payload);
            state.workouts = state.workouts.map((w) =>
                w._id === action.payload._id ? action.payload : w
            );
        },
        toggleWorkoutCompletion: (state, action: PayloadAction<string>) => {
            state.workouts = state.workouts.map((w) =>
                w._id === action.payload ? { ...w, completed: !w.completed } : w
            );
        },
    },
});

export const { setWorkouts, addWorkout, deleteWorkout, updateWorkout, toggleWorkoutCompletion } =
    workoutsSlice.actions;

export default workoutsSlice.reducer;
