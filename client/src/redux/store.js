import { configureStore } from "@reduxjs/toolkit"; /* stores state, combine reducers */
import todoReducer from "./todoSlice"; /* Importing the reducer in todoSlice */

/* link the store to the app */
export default configureStore({
  reducer: {   /* reducer is the one that updates the state */
    todos: todoReducer,
  },
});
