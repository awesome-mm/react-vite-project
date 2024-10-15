import {configureStore} from "@reduxjs/toolkit";
import exemple from "./modules/exemple.js";
// store 연결해줘야됨
export default configureStore({
  reducer: {
    exemple: exemple.reducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
  devTools: true,
});
