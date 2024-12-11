import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Account/reducer";
import workoutsReducer from "./Program/Workouts/workoutReducer";


const store = configureStore({
    reducer: {
        account: accountReducer,
        workouts: workoutsReducer,

    },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;