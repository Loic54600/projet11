import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    userName: "",
  },
  reducers: {
    setProfil: (state, action) => {
      const { firstName, lastName, userName } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.userName = userName;
    },
    updateProfil: (state, action) => {
      const { userName } = action.payload;
      state.userName = userName;
    },
  },
});

export const { setProfil, updateProfil } = userSlice.actions;
export default userSlice.reducer;