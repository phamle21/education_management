import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import ScrollspyMobile from 'components/scrollspy/ScrollspyMobile';
import { menuChangeAttrMobile, menuChangeNavClasses } from './main-menu/menuSlice';

const NavMobileButtons = () => {
  const dispatch = useDispatch();
  const { navClasses } = useSelector((state) => state.menu);
  const { items: scrollspyItems } = useSelector((state) => state.scrollspy);

  // Starts mobile menu opening sequence
  const showMobileMenu = (e) => {
    e.preventDefault();
    dispatch(menuChangeAttrMobile(true));
    let newNavClasses = {
      ...navClasses,
      'mobile-top-out': true,
      'mobile-top-in': false,
      'mobile-top-ready': false,
    };
    dispatch(menuChangeNavClasses(newNavClasses));
    setTimeout(() => {
      newNavClasses = {
        ...newNavClasses,
        'mobile-top-out': false,
        'mobile-side-ready': true,
      };
      dispatch(menuChangeNavClasses(newNavClasses));
    }, 200);
    setTimeout(() => {
      newNavClasses = {
        ...newNavClasses,
        'mobile-side-in': true,
      };
      dispatch(menuChangeNavClasses(newNavClasses));
    }, 230);
  };

  // Starts mobile menu closing sequence
  const hideMobileMenu = () => {
    let newNavClasses = {
      ...navClasses,
      'mobile-side-out': true,
      'mobile-side-ready': true,
      'mobile-side-in': false,
    };
    dispatch(menuChangeNavClasses(newNavClasses));
    setTimeout(() => {
      newNavClasses = {
        ...newNavClasses,
        'mobile-side-ready': false,
        'mobile-side-out': false,
        'mobile-top-ready': true,
      };
      dispatch(menuChangeNavClasses(newNavClasses));
    }, 200);
    setTimeout(() => {
      newNavClasses = {
        ...newNavClasses,
        'mobile-top-in': true,
        'mobile-top-ready': true,
      };
      dispatch(menuChangeNavClasses(newNavClasses));
      dispatch(menuChangeAttrMobile(false));
    }, 230);
  };

  useEffect(() => {
    if (navClasses && navClasses['mobile-side-in']) {
      window.addEventListener('click', hideMobileMenu);
    }
    return () => {
      window.removeEventListener('click', hideMobileMenu);
    };
    // eslint-disable-next-line
  }, [navClasses]);

  return (
    <div className="mobile-buttons-container">
      {scrollspyItems && scrollspyItems.length > 0 && <ScrollspyMobile items={scrollspyItems} />}
      <a href="#/" id="mobileMenuButton" className="menu-button" onClick={showMobileMenu}>
        <CsLineIcons icon="menu" />
      </a>
    </div>
  );
};
export default React.memo(NavMobileButtons);
