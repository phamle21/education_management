import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { MENU_PLACEMENT, MENU_BEHAVIOUR } from 'constants.js';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { getMenuItems } from 'routing/helper';
import { useWindowSize } from 'hooks/useWindowSize';
import { useWindowScroll } from 'hooks/useWindowScroll';
import routesAndMenuItems from 'routes.js';
import { layoutShowingNavMenu } from 'layout/layoutSlice';
import MainMenuItems from './MainMenuItems';
import {
  menuChangeAttrMenuAnimate,
  menuChangeAttrMobile,
  menuChangeBehaviourStatus,
  menuChangeCollapseAll,
  menuChangeNavClasses,
  menuChangePinButtonEnable,
  menuChangePlacementStatus,
} from './menuSlice';
import { checkBehaviour, checkPlacement, isDeeplyDiffBehaviourStatus, isDeeplyDiffPlacementStatus } from './helper';

const MainMenu = () => {
  const dispatch = useDispatch();
  const { placement, behaviour, placementStatus, behaviourStatus, attrMobile, breakpoints, useSidebar } = useSelector((state) => state.menu);
  const { isLogin, currentUser } = useSelector((state) => state.auth);
  const scrolled = useWindowScroll();
  const { width } = useWindowSize();

  const menuItemsMemo = useMemo(
    () =>
      getMenuItems({
        data: attrMobile && useSidebar ? routesAndMenuItems : routesAndMenuItems.mainMenuItems,
        isLogin,
        userRole: currentUser.role,
      }),
    [isLogin, currentUser, attrMobile, useSidebar]
  );

  useEffect(() => {
    dispatch(menuChangeAttrMenuAnimate(''));
    dispatch(layoutShowingNavMenu(''));

    if (placementStatus.status === 2 || placementStatus.status === 4) {
      // Switching back from the mobile menu layout fast
      dispatch(menuChangeNavClasses({}));
      dispatch(menuChangeAttrMobile(false));
    }
    // Prevents menu animation to make a fast switch
    if (behaviourStatus.status === 1) {
      dispatch(menuChangeCollapseAll(true));
      dispatch(menuChangePinButtonEnable(true));
    } else if (behaviourStatus.status === 2) {
      dispatch(menuChangeCollapseAll(true));
      dispatch(menuChangePinButtonEnable(false));
    } else if (behaviourStatus.status === 3) {
      dispatch(menuChangePinButtonEnable(true));
      dispatch(menuChangeCollapseAll(false));
    } else if (behaviourStatus.status === 4) {
      dispatch(menuChangePinButtonEnable(false));
      dispatch(menuChangeCollapseAll(true));
    } else if (behaviourStatus.status === 5) {
      dispatch(menuChangeCollapseAll(false));
      dispatch(menuChangePinButtonEnable(true));
    } else if (behaviourStatus.status === 6) {
      dispatch(menuChangeCollapseAll(false));
      dispatch(menuChangePinButtonEnable(true));
    }
    // eslint-disable-next-line
  }, [behaviourStatus, placementStatus]);

  useEffect(() => {
    if (placementStatus.placementHtmlData === MENU_PLACEMENT.Vertical && behaviourStatus.behaviourHtmlData === MENU_BEHAVIOUR.Unpinned && attrMobile !== true) {
      dispatch(menuChangeCollapseAll(true));
      dispatch(menuChangeAttrMenuAnimate('hidden'));
    }
    return () => {};
    // eslint-disable-next-line
  }, [attrMobile]);

  useEffect(() => {
    if (placementStatus.placementHtmlData === MENU_PLACEMENT.Horizontal && !attrMobile && behaviourStatus.behaviourHtmlData === MENU_BEHAVIOUR.Unpinned) {
      if (scrolled) {
        dispatch(menuChangeAttrMenuAnimate('hidden'));
        // Hiding all dropdowns to make sure they are closed when menu collapses
        document.documentElement.click();
      } else {
        dispatch(menuChangeAttrMenuAnimate(''));
      }
    }
    return () => {};
    // eslint-disable-next-line
  }, [scrolled]);

  const getMenuStatus = useCallback(
    (pBreakpoints, pPlacement, pBehaviour) => {
      if (pBreakpoints) {
        const placementStatusCB = checkPlacement({ placement: pPlacement, breakpoints: pBreakpoints });
        const behaviourStatusCB = checkBehaviour({ placement: placementStatusCB.placementHtmlData, behaviour: pBehaviour, breakpoints: pBreakpoints });

        if (isDeeplyDiffPlacementStatus(placementStatusCB, placementStatus)) {
          dispatch(menuChangePlacementStatus(placementStatusCB));
        }
        if (isDeeplyDiffBehaviourStatus(behaviourStatusCB, behaviourStatus)) {
          dispatch(menuChangeBehaviourStatus(behaviourStatusCB));
        }
      }
      // eslint-disable-next-line
  }, [behaviourStatus,placementStatus,breakpoints]);

  useEffect(() => {
    if (width && placement && behaviour && breakpoints) {
      getMenuStatus(breakpoints, placement, behaviour);
    }
    // eslint-disable-next-line
  }, [width, breakpoints, placement, behaviour]);

  // Initializes the horizontal menu
  // Customizes dropdown clicks to prevent auto closing and making sure all sub menus are closed when parent is closed
  if (menuItemsMemo) {
    if (placementStatus.view === MENU_PLACEMENT.Horizontal) {
      return (
        <div className="menu-container flex-grow-1">
          <ul id="menu" className={classNames('menu show')}>
            <MainMenuItems menuItems={menuItemsMemo} menuPlacement={placementStatus.view} />
          </ul>
        </div>
      );
    }
    // Vertical menu scrollbar init
    return (
      <OverlayScrollbarsComponent
        options={{
          scrollbars: { autoHide: 'leave', autoHideDelay: 600 },
          overflowBehavior: { x: 'hidden', y: 'scroll' },
        }}
        className="menu-container flex-grow-1"
      >
        <ul id="menu" className={classNames('menu show')}>
          <MainMenuItems menuItems={menuItemsMemo} menuPlacement={placementStatus.view} />
        </ul>
      </OverlayScrollbarsComponent>
    );
  }
  return <></>;
};

export default React.memo(MainMenu);
