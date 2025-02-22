import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myEvent: [], // ✅ Corrected to ensure it's always an array
};

const myEventSlice = createSlice({
  name: "MyEvent", // ✅ Ensure name matches store key in `store.js`
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.myEvent = [...state.myEvent, action.payload]; // ✅ Ensures new array reference
    },
    deleteItem: (state, action) => {
      state.myEvent = state.myEvent.filter((item) => item._id !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = myEventSlice.actions;
export default myEventSlice.reducer;

// ✅ Memoized Selector to prevent re-renders
import { createSelector } from "reselect";
export const getMyEvent = createSelector(
  (state) => state.MyEvent.myEvent, // ✅ Ensure this path matches `store.js`
  (myEvent) => myEvent || [] // ✅ Ensures an array is always returned
);

