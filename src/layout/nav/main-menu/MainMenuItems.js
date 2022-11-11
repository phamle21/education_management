import React, { useEffect, useState, memo, forwardRef, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import { Collapse, Dropdown } from 'react-bootstrap';
import { DEFAULT_SETTINGS, USE_MULTI_LANGUAGE } from 'config.js';
import { MENU_PLACEMENT } from 'constants.js';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { layoutShowingNavMenu } from 'layout/layoutSlice';
import { menuChangeCollapseAll } from './menuSlice';

const HorizontalMenuDropdownToggle = memo(
  forwardRef(({ children, onClick, href = '#', active = false }, ref) => (
    <a
      ref={ref}
      className={classNames('dropdown-toggle', { active })}
      data-toggle="dropdown"
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ))
);

const MainMenuItem = memo(({ item, id, isSubItem = false, menuPlacement = DEFAULT_SETTINGS.MENU_PLACEMENT }) => {
  const dispatch = useDispatch();
  const dropdownMenuRef = useRef();
  const { collapseAll } = useSelector((state) => state.menu);
  const { showingNavMenu } = useSelector((state) => state.layout);
  const { pathname } = useLocation();
  const isActive = item.path.startsWith('#') ? false : pathname === item.path || pathname.indexOf(`${item.path}/`) > -1;

  const { formatMessage: f } = useIntl();
  const [verticalMenuCollapseExpanded, setVerticalMenuCollapseExpanded] = useState(isActive);
  const [horizontalDropdownIsOpen, setHorizontalDropdownIsOpen] = useState(false);

  const getLabel = (icon, label) => (
    <>
      {icon && (
        <>
          <CsLineIcons icon={icon} size={18} className="cs-icon icon" />{' '}
        </>
      )}
      <span className="label">{USE_MULTI_LANGUAGE ? f({ id: label }) : label}</span>
    </>
  );

  const onToggleItem = (isOpen) => {
    setHorizontalDropdownIsOpen(isOpen);
  };

  const onVerticalMenuCollapseClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setVerticalMenuCollapseExpanded(!verticalMenuCollapseExpanded);
    dispatch(menuChangeCollapseAll(false));
  };

  const onHorizontalMenuDropdownToggleClick = () => {
    onToggleItem(!horizontalDropdownIsOpen);
    dispatch(layoutShowingNavMenu(''));
  };

  useEffect(() => {
    if (showingNavMenu !== '' && horizontalDropdownIsOpen) {
      onToggleItem(false);
    }
  }, [showingNavMenu, horizontalDropdownIsOpen]);

  if (item.subs && menuPlacement === MENU_PLACEMENT.Horizontal && !item.megaParent) {
    return (
      <Dropdown as="li" key={id} onToggle={onToggleItem} className={classNames({ mega: item.mega })} show={horizontalDropdownIsOpen}>
        <Dropdown.Toggle as={HorizontalMenuDropdownToggle} onClick={onHorizontalMenuDropdownToggleClick} href={item.path} active={isActive}>
          {getLabel(item.icon, item.label)}
        </Dropdown.Toggle>
        <Dropdown.Menu
          ref={dropdownMenuRef}
          renderOnMount
          as="ul"
          align="left"
          className={classNames('opacityIn', {
            'row align-items-start': item.mega,
            [`row-cols-${item.subs.length}`]: item.mega,
          })}
          popperConfig={{
            strategy: item.mega ? 'fixed' : 'absolute',
            modifiers: [
              {
                name: 'computeStyles',
                options: {
                  gpuAcceleration: true, // true by default
                  adaptive: false,
                  roundOffsets: ({ x, y }) => {
                    if (item.mega) {
                      try {
                        return {
                          x: Math.round((window.innerWidth - dropdownMenuRef.current.clientWidth) / 2 - 8),
                          y: y + 7,
                        };
                      } catch (e) {
                        console.warn('error:', e);
                      }
                    }
                    if (isSubItem) {
                      return { x, y: y - 34 };
                    }
                    return { x, y: y + 2 };
                  },
                },
              },
            ],
          }}
        >
          <MainMenuItems menuItems={item.subs} menuPlacement={menuPlacement} isSubItem />
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  if (item.subs && menuPlacement === MENU_PLACEMENT.Horizontal) {
    return (
      <li className="dropdown col d-flex flex-column">
        <NavLink to={item.path} className={classNames('dropdown-toggle', { active: isActive })}>
          {getLabel(item.icon, item.label)}
        </NavLink>
        <ul>
          <MainMenuItems menuItems={item.subs} menuPlacement={menuPlacement} isSubItem />
        </ul>
      </li>
    );
  }
  if (item.subs && menuPlacement === MENU_PLACEMENT.Vertical) {
    return (
      <li>
        <a
          href={item.path}
          data-bs-toggle="collapse"
          role="button"
          className={classNames({ active: isActive })}
          aria-expanded={verticalMenuCollapseExpanded && !collapseAll}
          onClick={onVerticalMenuCollapseClick}
        >
          {getLabel(item.icon, item.label)}
        </a>
        <Collapse in={verticalMenuCollapseExpanded && !collapseAll}>
          <ul>
            <MainMenuItems menuItems={item.subs} menuPlacement={menuPlacement} isSubItem />
          </ul>
        </Collapse>
      </li>
    );
  }
  if (item.isExternal) {
    return (
      <li key={id}>
        <a href={item.path} target="_blank" rel="noopener noreferrer">
          {getLabel(item.icon, item.label)}
        </a>
      </li>
    );
  }
  if (!isSubItem || menuPlacement === MENU_PLACEMENT.Vertical) {
    return (
      <li>
        <NavLink to={item.path} className={classNames({ active: isActive })} activeClassName="">
          {getLabel(item.icon, item.label)}
        </NavLink>
      </li>
    );
  }
  if (menuPlacement === MENU_PLACEMENT.Horizontal && item.megaParent) {
    return (
      <li className="col d-flex flex-column">
        <NavLink to={item.path} className={classNames({ active: isActive })} activeClassName="">
          {getLabel(item.icon, item.label)}
        </NavLink>
      </li>
    );
  }
  return (
    <Dropdown.Item as="li">
      <NavLink to={item.path} className={classNames({ active: isActive })} activeClassName="">
        {getLabel(item.icon, item.label)}
      </NavLink>
    </Dropdown.Item>
  );
});

MainMenuItem.displayName = 'MainMenuItem';

const MainMenuItems = React.memo(({ menuItems = [], menuPlacement = DEFAULT_SETTINGS.MENU_PLACEMENT, isSubItem = false }) =>
  menuItems.map((item, index) => (
    <MainMenuItem key={`menu.${item.path}.${index}`} id={item.path} item={item} menuPlacement={menuPlacement} isSubItem={isSubItem} />
  ))
);

MainMenuItems.displayName = 'MainMenuItems';

export default React.memo(MainMenuItems);
