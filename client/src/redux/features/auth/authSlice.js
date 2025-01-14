import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, userLogin, userRegistration } from "./authActions";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  loading: false,
  user: null,
  token,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // LOGIN USER
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    //REGISTER USER
    builder.addCase(userRegistration.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userRegistration.fulfilled, (state, { payload }) => {
      state.loading = false;
      if (payload && payload.user) {
        state.user = payload.user;
      }
      // state.token = payload.token;
    });
    builder.addCase(userRegistration.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    // CURRENT USER
    builder.addCase(getCurrentUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      // if (payload && payload.user) {
      //   state.user = payload.user;
      // }
      state.user = payload.user;
    });
    builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default authSlice;
