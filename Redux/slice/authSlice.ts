import { createSlice } from "@reduxjs/toolkit";

let token: any;

const initialState = {
  isLoading: false,
  isLoggedIn: token ? true : false,
  token: token ? token : "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});
export default authSlice.reducer;