import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import MyEventReducer from "../pages/MyEvent/MyEventSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    MyEvent: MyEventReducer,
  },
});

export default store;
