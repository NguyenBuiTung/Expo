import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productRedux from "./product/productRedux";
import userRedux from "./user/userRedux";
import listJob from "./product/listJob";
import listJobDetail from "./product/listJobDetail";
import pushJob from "./user/pushJob";

export const store = configureStore({
  reducer: {
   productRedux,
   userRedux,
   listJob,
   listJobDetail,
  pushJob
  },
  middleware: [thunk],
  
});
