import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  menuChangeBehaviour,
  menuChangeBreakpoints,
  menuChangePinButtonEnable,
  menuChangePlacement,
  menuChangeUseSidebar,
  menuResetBreakpoints,
  menuResetUseSidebar,
} from 'layout/nav/main-menu/menuSlice';
import { settingsChangeColor, settingsChangeLayout, settingsChangeNavColor, settingsChangeRadius, settingsResetLayout } from 'settings/settingsSlice';

const useCustomLayout = ({
  placement = null,
  behaviour = null,
  layout = null,
  radius = null,
  color = null,
  navColor = null,
  useSidebar = null,
  pinEnable = null,
  fullpage = null,
  breakpoints = null,
}) => {
  const dispatch = useDispatch();
  const {
    placement: currentPlacement,
    behaviour: currentBehaviour,
    breakpoints: currentBreakpoints,
    pinButtonEnable: currentPinButtonEnable,
    useSidebar: currentUseSidebar,
  } = useSelector((state) => state.menu);
  const { layout: currentLayout, radius: currentRadius, color: currentColor, navColor: currentNavColor } = useSelector((state) => state.settings);
  const variables = {
    placement: placement || currentPlacement,
    behaviour: behaviour || currentBehaviour,
    layout: layout || currentLayout,
    radius: radius || currentRadius,
    color: color || currentColor,
    navColor: navColor || currentNavColor,
    breakpoints: breakpoints || currentBreakpoints,
    useSidebar: useSidebar || currentUseSidebar,
  };
  useEffect(() => {
    const changes = {
      placement: false,
      behaviour: false,
      layout: false,
      radius: false,
      color: false,
      navColor: false,
      breakpoints: false,
      pinEnable: false,
      useSidebar: false,
    };

    if (placement) {
      changes.placement = true;
      dispatch(menuChangePlacement(placement));
    }

    if (behaviour) {
      changes.behaviour = true;
      dispatch(menuChangeBehaviour(behaviour));
    }

    if (layout) {
      changes.layout = true;
      dispatch(settingsChangeLayout(layout));
    }
    if (radius) {
      changes.radius = true;
      dispatch(settingsChangeRadius(radius));
    }

    if (color) {
      changes.color = true;
      dispatch(settingsChangeColor(color));
    }
    if (navColor) {
      changes.navColor = true;
      dispatch(settingsChangeNavColor(navColor));
    }

    if (breakpoints) {
      changes.breakpoints = true;
      dispatch(menuChangeBreakpoints(breakpoints));
    }

    if (pinEnable !== null) {
      changes.pinEnable = true;
      dispatch(menuChangePinButtonEnable(pinEnable));
    }

    if (useSidebar !== null) {
      changes.useSidebar = true;
      dispatch(menuChangeUseSidebar(useSidebar));
    }
    if (fullpage !== null) {
      changes.fullpage = true;
      document.documentElement.setAttribute('data-fullpage', fullpage);
    }

    return () => {
      if (changes.placement) dispatch(menuChangePlacement(currentPlacement));
      if (changes.behaviour) dispatch(menuChangeBehaviour(currentBehaviour));
      if (changes.layout) dispatch(settingsResetLayout());
      if (changes.radius) dispatch(settingsChangeRadius(currentRadius));
      if (changes.color) dispatch(settingsChangeColor(currentColor));
      if (changes.navColor) dispatch(settingsChangeNavColor(currentNavColor));
      if (changes.breakpoints) dispatch(menuResetBreakpoints());
      if (changes.pinEnable) dispatch(menuChangePinButtonEnable(currentPinButtonEnable));
      if (changes.useSidebar) dispatch(menuResetUseSidebar());
      if (changes.fullpage) document.documentElement.removeAttribute('data-fullpage');
    };
    // eslint-disable-next-line
  }, []);

  return variables;
};

export default useCustomLayout;
