import { DEFAULT_PATHS } from 'config.js';
import React from 'react';
import { Link } from 'react-router-dom';

const NavLogo = () => {
  return (
    <div className="logo position-relative">
      <Link to={DEFAULT_PATHS.APP}>
        <svg xmlns="http://www.w3.org/2000/svg" width={27} height={40} viewBox="0 0 27 40">
          <g data-name="Group 101" transform="translate(-375 -21)">
            <rect data-name="Rectangle 16" width={13} height={8} rx={4} transform="translate(375 53)" fill="#7620ff" />
            <rect data-name="Rectangle 11" width={20} height={8} rx={4} transform="translate(382 21)" fill="#f2b300" />
            <rect data-name="Rectangle 15" width={20} height={8} rx={4} transform="translate(382 37)" fill="#4cd5c5" />
            <rect data-name="Rectangle 12" width={8} height={8} rx={4} transform="translate(375 29)" fill="#f40051" />
          </g>
        </svg>
      </Link>
    </div>
  );
};
export default React.memo(NavLogo);
