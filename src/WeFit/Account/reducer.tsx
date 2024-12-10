// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // Define a type for the user
// interface User {
//   username: string;
//   email: string;
//   firstName?: string;
//   lastName?: string;
//   gender?: string;
//   role?: string;
// }

// // Define the initial state type
// interface AccountState {
//   currentUser: User | null;
// }

// // Initial state
// const initialState: AccountState = {
//   currentUser: null, // User is initially null
// };

// // Create a slice for the account state
// const accountSlice = createSlice({
//   name: "account",
//   initialState,
//   reducers: {
//     // Action to set the current user
//     setCurrentUser: (state: AccountState, action: PayloadAction<User>) => {
//       state.currentUser = action.payload;
//     },

//     // Action to clear the current user (e.g., on logout)
//     clearCurrentUser: (state: AccountState) => {
//       state.currentUser = null;
//     },
//   },
// });

// // Export actions for use in components
// export const { setCurrentUser, clearCurrentUser } = accountSlice.actions;

// // Export the reducer for the store
// export default accountSlice.reducer;
