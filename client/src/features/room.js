import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  number: "",
  username: "",
};

const roomSlice = createSlice({
  name: "room",
  initialState: { value: initialStateValue },
  reducers: {
    joinRoom: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { joinRoom } = roomSlice.actions;

export default roomSlice.reducer;
