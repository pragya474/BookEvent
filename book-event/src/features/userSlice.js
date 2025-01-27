import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null; // Reset error when starting a login attempt
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null; // Reset error on success
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Set error if login fails
    },
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

// Export the actions
export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;

// Selector to get user state
export const selectUser = (state) => state.user;

// Export the reducer
export default userSlice.reducer;
