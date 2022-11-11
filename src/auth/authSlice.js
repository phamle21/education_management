import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import apiBase from 'app/axios/apiBase';
import { DEFAULT_USER, IS_DEMO } from 'config.js';

const initialState = {
  isLogin: IS_DEMO,
  currentUser: IS_DEMO ? DEFAULT_USER : {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
      state.isLogin = true;
    },
  },
});

export const { setCurrentUser } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
