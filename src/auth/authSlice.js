import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import apiBase from 'app/axios/apiBase';
import { DEFAULT_USER, IS_DEMO, LOGIN_USER } from 'config.js';


const initialState = {
  isLogin: IS_DEMO,
  currentUser: IS_DEMO ? DEFAULT_USER : {},
  userToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      const { currentUser, userToken } = action.payload;
      state.currentUser = currentUser;
      state.isLogin = true;
      state.userToken = userToken;
    },
  },
});

export const { setCurrentUser } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
