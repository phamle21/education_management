import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showingNavMenu: '',
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    layoutShowingNavMenu(state, action) {
      state.showingNavMenu = action.payload;
    },
  },
});
export const { layoutShowingNavMenu } = layoutSlice.actions;
const layoutReducer = layoutSlice.reducer;

export default layoutReducer;
