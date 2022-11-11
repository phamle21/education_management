import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_SETTINGS } from 'config.js';

export const BREAKPOINTS = { sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 };

const initialState = {
  behaviour: DEFAULT_SETTINGS.MENU_BEHAVIOUR,
  placement: DEFAULT_SETTINGS.MENU_PLACEMENT,
  useSidebar: DEFAULT_SETTINGS.USE_SIDEBAR,
  pinButtonEnable: true,
  placementStatus: {},
  behaviourStatus: {},
  navClasses: {},
  attrMobile: false,
  attrMenuAnimate: '',
  collapseAll: false,
  breakpoints: {
    verticalUnpinned: BREAKPOINTS.xxl,
    verticalMobile: BREAKPOINTS.lg,
    horizontalMobile: BREAKPOINTS.lg,
  },
  menuPadding: 0,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    menuChangePlacement(state, action) {
      state.placement = action.payload;
    },
    menuChangePlacementStatus(state, action) {
      state.placementStatus = action.payload;
    },
    menuChangeBehaviour(state, action) {
      state.behaviour = action.payload;
    },
    menuChangeBehaviourStatus(state, action) {
      state.behaviourStatus = action.payload;
    },
    // Disables pin button. It is disabled for the vertical menu when the screen size is smaller but not mobile.
    menuChangePinButtonEnable(state, action) {
      state.pinButtonEnable = action.payload;
    },
    menuChangeAttrMenuAnimate(state, action) {
      state.attrMenuAnimate = action.payload;
    },
    menuChangeAttrMobile(state, action) {
      state.attrMobile = action.payload;
    },
    menuChangeCollapseAll(state, action) {
      state.collapseAll = action.payload;
    },
    menuChangeNavClasses(state, action) {
      state.navClasses = action.payload;
    },
    menuChangeBreakpoints(state, action) {
      state.breakpoints = {
        ...state.breakpoints,
        ...action.payload,
      };
    },
    menuResetBreakpoints(state) {
      state.breakpoints = {
        verticalUnpinned: BREAKPOINTS.xxl,
        verticalMobile: BREAKPOINTS.lg,
        horizontalMobile: BREAKPOINTS.lg,
      };
    },
    menuChangeUseSidebar(state, action) {
      state.useSidebar = action.payload;
    },
    menuResetUseSidebar(state) {
      state.useSidebar = DEFAULT_SETTINGS.useSidebar;
    },
    menuChangeMenuPadding(state, action) {
      state.menuPadding = action.payload;
    },
  },
});

export const {
  menuChangePlacement,
  menuChangePlacementStatus,
  menuChangeBehaviour,
  menuChangeBehaviourStatus,
  menuChangePinButtonEnable,
  menuChangeAttrMenuAnimate,
  menuChangeAttrMobile,
  menuChangeCollapseAll,
  menuChangeNavClasses,
  menuChangeBreakpoints,
  menuResetBreakpoints,
  menuChangeUseSidebar,
  menuResetUseSidebar,
  menuChangeMenuPadding,
} = menuSlice.actions;
const menuReducer = menuSlice.reducer;

export default menuReducer;
