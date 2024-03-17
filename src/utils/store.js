import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import moviesReducer from './moviesSlice'

const store = configureStore({
  reducer: {
    user: useReducer,
    movies: moviesReducer,
  },
});
export default store;
