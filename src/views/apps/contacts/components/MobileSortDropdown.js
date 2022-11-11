import { Button, Dropdown } from 'react-bootstrap';
import React from 'react';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import classNames from 'classnames';

const CustomToggle = React.forwardRef(({ onClick }, ref) => (
  <Button
    ref={ref}
    variant="outline-primary"
    className="btn-icon btn-icon-only ms-1"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <CsLineIcons icon="sort" />
  </Button>
));

const MobileSortDropdown = ({ tableInstance }) => {
  const { headerGroups } = tableInstance;

  return (
    <Dropdown className="dropdown d-inline-block d-lg-none">
      <Dropdown.Toggle as={CustomToggle} />
      <Dropdown.Menu className="dropdown-menu-end custom-sort">
        {headerGroups.map((headerGroup, headerIndex) =>
          headerGroup.headers
            .filter((column) => column.sortable)
            .map((column) => {
              return (
                <div
                  key={`dropdown.sort.${headerIndex}`}
                  className={classNames('dropdown-item cursor-pointer', {
                    sort: column.sortable,
                    desc: column.isSortedDesc,
                    asc: column.isSorted && !column.isSortedDesc,
                  })}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                </div>
              );
            })
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MobileSortDropdown;
