import { configureStore } from "@reduxjs/toolkit";

import toDoReducer from "./todo-slice";

const store = configureStore({
  reducer: { toDo: toDoReducer },
});

export default store;
