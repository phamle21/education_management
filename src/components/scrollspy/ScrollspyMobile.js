import React from 'react';
import { Dropdown } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import ScrollspyContent from './ScrollspyContent';

const ScrollspyToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="#/!"
    ref={ref}
    className="spy-button text-white"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));
ScrollspyToggle.displayName = 'ScrollspyToggle';

const ScrollspyMobile = ({ items = [] }) => {
  if (items === null || items.length <= 0) {
    return <></>;
  }

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle as={ScrollspyToggle}>
          <CsLineIcons icon="menu-dropdown" />
        </Dropdown.Toggle>
        <Dropdown.Menu
          as="ul"
          className="dropdown-menu-end"
          popperConfig={{
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 5],
                },
              },
            ],
          }}
        >
          <ScrollspyContent items={items} />
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
export default React.memo(ScrollspyMobile);
