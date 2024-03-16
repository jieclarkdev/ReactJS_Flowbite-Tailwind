import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      firstName: "",
      lastName: "",
      email: "",
    },
    token: ''
  },
//   setter
  reducers: {
    storeUser: (state, action) => {
        state.user = action.payload
    },
    storeToken: (state, action) => {
        state.token = action.payload
    }
  }
});

export const { storeUser, storeToken } = authSlice.actions

export default authSlice.reducer