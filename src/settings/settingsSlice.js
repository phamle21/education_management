import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_SETTINGS } from 'config.js';

const getComputedValues = () => {
  const rootStyle = window.getComputedStyle(document.body);
  return {
    primary: rootStyle.getPropertyValue('--primary').trim(),
    secondary: rootStyle.getPropertyValue('--secondary').trim(),
    tertiary: rootStyle.getPropertyValue('--tertiary').trim(),
    quaternary: rootStyle.getPropertyValue('--quaternary').trim(),
    body: rootStyle.getPropertyValue('--body').trim(),
    alternate: rootStyle.getPropertyValue('--alternate').trim(),
    lightText: rootStyle.getPropertyValue('--light-text').trim(),
    warning: rootStyle.getPropertyValue('--warning').trim(),
    danger: rootStyle.getPropertyValue('--danger').trim(),
    success: rootStyle.getPropertyValue('--success').trim(),
    info: rootStyle.getPropertyValue('--info').trim(),

    font: rootStyle.getPropertyValue('--font').trim(),
    fontHeading: rootStyle.getPropertyValue('--font-heading').trim(),

    background: rootStyle.getPropertyValue('--background').trim(),
    foreground: rootStyle.getPropertyValue('--foreground').trim(),
    separator: rootStyle.getPropertyValue('--separator').trim(),
    separatorLight: rootStyle.getPropertyValue('--separator-light').trim(),

    primaryrgb: rootStyle.getPropertyValue('--primary-rgb').trim(),
    secondaryrgb: rootStyle.getPropertyValue('--secondary-rgb').trim(),
    tertiaryrgb: rootStyle.getPropertyValue('--tertiary-rgb').trim(),
    quaternaryrgb: rootStyle.getPropertyValue('--quaternary-rgb').trim(),

    transitionTimeShort: rootStyle.getPropertyValue('--transition-time-short').trim().replace('ms', ''),
    transitionTime: rootStyle.getPropertyValue('--transition-time').trim().replace('ms', ''),
    navSizeSlim: rootStyle.getPropertyValue('--nav-size-slim').trim(),

    borderRadiusXl: rootStyle.getPropertyValue('--border-radius-xl').trim(),
    borderRadiusLg: rootStyle.getPropertyValue('--border-radius-lg').trim(),
    borderRadiusMd: rootStyle.getPropertyValue('--border-radius-md').trim(),
    borderRadiusSm: rootStyle.getPropertyValue('--border-radius-sm').trim(),
    spacingHorizontal: rootStyle.getPropertyValue('--main-spacing-horizontal').trim(),

    sm: rootStyle.getPropertyValue('--sm').trim(),
    md: rootStyle.getPropertyValue('--md').trim(),
    lg: rootStyle.getPropertyValue('--lg').trim(),
    xl: rootStyle.getPropertyValue('--xl').trim(),
    xxl: rootStyle.getPropertyValue('--xxl').trim(),
    direction: 'ltr',
  };
};
const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));

const initialState = {
  color: DEFAULT_SETTINGS.COLOR,
  layout: DEFAULT_SETTINGS.LAYOUT,
  radius: DEFAULT_SETTINGS.RADIUS,
  navColor: DEFAULT_SETTINGS.NAV_COLOR,
  themeValues: getComputedValues(),
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setColor(state, action) {
      state.color = action.payload;
    },
    setThemeValues(state) {
      state.themeValues = getComputedValues();
    },
    settingsChangeRadius(state, action) {
      state.radius = action.payload;
    },
    settingsChangeNavColor(state, action) {
      state.navColor = action.payload;
    },
    settingsChangeLayout(state, action) {
      state.layout = action.payload;
    },
    settingsResetLayout(state) {
      state.layout = DEFAULT_SETTINGS.LAYOUT;
    },
  },
});
export const { setColor, setThemeValues } = settingsSlice.actions;

export const settingsChangeColor = (color) => async (dispatch) => {
  dispatch(setColor(color));
  await wait(10);
  dispatch(setThemeValues());
};
export const { settingsChangeRadius, settingsChangeNavColor, settingsChangeLayout, settingsResetLayout } = settingsSlice.actions;
const settingsReducer = settingsSlice.reducer;

export default settingsReducer;
