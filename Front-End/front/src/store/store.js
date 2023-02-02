import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import userSlice from "./userSlice";
// import detailSlice from "./detailSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    user: userSlice,
    // detail: detailSlice,
  },
});
