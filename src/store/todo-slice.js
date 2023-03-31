import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  items: ["Study"],
};

const toDoSlice = createSlice({
  name: "toDoItems",
  initialState: initialAuthState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const editItemActions = toDoSlice.actions;

export default toDoSlice.reducer;
