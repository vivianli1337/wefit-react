import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    fetchAllExercises,
    fetchExercisesByBodyPart,
} from "./client";

export const getAllExercises = createAsyncThunk(
    "exercises/getAllExercises",
    async () => {
        const exercises = await fetchAllExercises();
        return exercises;
    }
);

export const getExercisesByBodyPart = createAsyncThunk(
    "exercises/getExercisesByBodyPart",
    async (bodyPart: string) => {
        const exercises = await fetchExercisesByBodyPart(bodyPart);
        return exercises;
    }
);
const exerciseSlice = createSlice({
    name: "exercises",
    initialState: {
        exercises: [],
        status: "idle",
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllExercises.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllExercises.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.exercises = action.payload;
            })
            .addCase(getAllExercises.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message ?? "Unknown error";
            })
            .addCase(getExercisesByBodyPart.fulfilled, (state, action) => {
                state.exercises = action.payload;
            });
    },
});

export default exerciseSlice.reducer;
