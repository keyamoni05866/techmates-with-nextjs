import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../store";

import { TUser } from "@/src/types";

type TAuthSlice = {
  user: null | TUser;
  token: null | object;
};

const initialState: TAuthSlice = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    signUpUser: (state, action) => {
      const { userInfo, token } = action.payload;

      state.user = userInfo;
      state.token = token;
    },
    signInUser: (state, action) => {
      const { userInfo, token } = action.payload;

      state.user = userInfo;
      state.token = token;
    },
    logOutUser: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});
export const { signInUser, logOutUser, signUpUser } = authSlice.actions;
export default authSlice.reducer;
export const currentToken = (state: RootState) => state.auth.token;
export const currentUser = (state: RootState) => state.auth.user;
