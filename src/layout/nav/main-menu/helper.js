import { DIMENSION, MENU_BEHAVIOUR, MENU_PLACEMENT } from 'constants.js';
// Decides which type of menu to add based on the parameters or the current window size.
// placementStatus:
// 1 {selected: 'horizontal',  dimension: 'mobile',         html-data: 'horizontal', view: 'vertical'}
// 2 {selected: 'horizontal',  dimension: 'tablet|desktop', html-data: 'horizontal', view: 'horizontal'}
// 3 {selected: 'vertical',    dimension: 'mobile',         html-data: 'horizontal', view: 'vertical' }
// 4 {selected: 'vertical',    dimension: 'tablet|desktop', html-data: 'vertical',   view: 'vertical' }

export const checkPlacement = ({ placement, breakpoints }) => {
  const windowWidth = window.innerWidth;
  if (placement === MENU_PLACEMENT.Horizontal) {
    // Adding vertical menu for mobile
    if (breakpoints.horizontalMobile > windowWidth) {
      return {
        status: 1,
        placementHtmlData: MENU_PLACEMENT.Horizontal,
        dimensionHtmlData: DIMENSION.Mobile,
        view: MENU_PLACEMENT.Vertical,
      };
    }
    // Adding horizontal menu for desktop
    return {
      status: 2,
      placementHtmlData: MENU_PLACEMENT.Horizontal,
      dimensionHtmlData: DIMENSION.Desktop,
      view: MENU_PLACEMENT.Horizontal,
    };
  }

  if (placement === MENU_PLACEMENT.Vertical) {
    // Adding vertical menu for mobile
    if (breakpoints.verticalMobile > windowWidth) {
      return {
        status: 3,
        placementHtmlData: MENU_PLACEMENT.Horizontal,
        dimensionHtmlData: DIMENSION.Mobile,
        view: MENU_PLACEMENT.Vertical,
      };
    }
    // Adding vertical menu for desktop
    return {
      status: 4,
      placementHtmlData: MENU_PLACEMENT.Vertical,
      dimensionHtmlData: DIMENSION.Desktop,
      view: MENU_PLACEMENT.Vertical,
    };
  }
  return { status: 0, placementHtmlData: '', dimensionHtmlData: '', view: '' };
};

// Decides which type of menu behaviour to init based on the parameters or the current window size.
//  behaviourStatus:
//  1 {selected: 'unpinned', placement: 'vertical',   dimension: 'mobile|desktop',  html-data: 'unpinned'}
//  2 {selected: 'unpinned', placement: 'vertical',   dimension: 'tablet',          html-data: 'unpinned'}
//  3 {selected: 'pinned',   placement: 'vertical',   dimension: 'mobile|desktop',  html-data: 'pinned'}
//  4 {selected: 'pinned',   placement: 'vertical',   dimension: 'tablet',          html-data: 'unpinned'}
//  5 {selected: 'unpinned', placement: 'horizontal', dimension: 'all',             html-data: 'unpinned'}
//  6 {selected: 'pinned',   placement: 'horizontal', dimension: 'all',             html-data: 'pinned'}
export const checkBehaviour = ({ placement, behaviour, breakpoints }) => {
  const windowWidth = window.innerWidth;
  // Vertical rules
  if (placement === MENU_PLACEMENT.Vertical && behaviour === MENU_BEHAVIOUR.Unpinned) {
    // Mobile and Desktop
    if (breakpoints.verticalMobile > windowWidth || breakpoints.verticalUnpinned <= windowWidth) {
      return {
        status: 1,
        // A small fix to make sure nav config at Vertical No Semi Hidden overrides theme settings.
        behaviourHtmlData: breakpoints.verticalUnpinned !== breakpoints.verticalMobile ? MENU_BEHAVIOUR.Unpinned : MENU_BEHAVIOUR.Pinned,
      };
    }
    // Tablet
    return {
      status: 2,
      behaviourHtmlData: MENU_BEHAVIOUR.Unpinned,
    };
  }
  if (placement === MENU_PLACEMENT.Vertical && behaviour === MENU_BEHAVIOUR.Pinned) {
    // Mobile and Desktop
    if (breakpoints.verticalMobile > windowWidth || breakpoints.verticalUnpinned <= windowWidth) {
      return {
        status: 3,
        behaviourHtmlData: MENU_BEHAVIOUR.Pinned,
      };
    }
    // Tablet
    return {
      status: 4,
      behaviourHtmlData: MENU_BEHAVIOUR.Unpinned,
    };
  }

  // Horizontal rules
  if (placement === MENU_PLACEMENT.Horizontal && behaviour === MENU_BEHAVIOUR.Unpinned) {
    return {
      status: 5,
      behaviourHtmlData: MENU_BEHAVIOUR.Unpinned,
    };
  }
  if (placement === MENU_PLACEMENT.Horizontal && behaviour === MENU_BEHAVIOUR.Pinned) {
    return {
      status: 6,
      behaviourHtmlData: MENU_BEHAVIOUR.Pinned,
    };
  }
  return { status: 0, behaviourHtmlData: '' };
};

// Using popperjs to align user,language and notification dropdowns in the menu
export const dropdownPositionFixInMenu = ({ style, placement, isMobile }) => {
  let xPlacement = 'bottom-end';
  let { transform } = style;
  if ((placement === MENU_PLACEMENT.Vertical || isMobile) && style && style.transform) {
    transform = style.transform.replace(/(\d+)px/, '15px');
    if (window.innerHeight <= 450) {
      // transform = transform.replace(/, (\d+)px/, ', 15px');
      xPlacement = 'top-end';
    }
  }
  return { xPlacement, transform };
};

export const isDeeplyDiffPlacementStatus = (a, b) => {
  if (a.status !== b.status) return true;
  if (a.placementHtmlData !== b.placementHtmlData) return true;
  if (a.dimensionHtmlData !== b.dimensionHtmlData) return true;
  // noinspection RedundantIfStatementJS
  if (a.view !== b.view) return true;
  return false;
};
export const isDeeplyDiffBehaviourStatus = (a, b) => {
  if (a.status !== b.status) return true;
  // noinspection RedundantIfStatementJS
  if (a.behaviourHtmlData !== b.behaviourHtmlData) return true;
  return false;
};
