import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myEvent: [],
};
const MyEventSlice = createSlice({
  name: "myEvent",
  initialState,
  reducers: {
    addItem(state, action) {
      state.myEvent.push(action.payload);
    },
    deleteItem(state, action) {
      state.myEvent = state.myEvent.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});
export const { addItem, deleteItem } = MyEventSlice.actions;
export default MyEventSlice.reducer;

export const getMyEvent = (state) => state.myEvents.myEvent;
