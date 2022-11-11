import React, { useState } from 'react';
import useMousetrap from 'react-hook-mousetrap';

const ShotcutOverridingDefaults = () => {
  const [active, setActive] = useState(false);

  useMousetrap(['mod+a'], (event) => {
    event.preventDefault();
    setActive(true);
  });

  useMousetrap(['mod+d'], (event) => {
    event.preventDefault();
    setActive(false);
  });

  return (
    <>
      <p>
        <kbd>ctrl+a</kbd> will add active class to the below items and will override default behaviour that selects all of the page.
      </p>
      <p>
        <kbd>ctrl+d</kbd> will remove active class from the below items and will override default behaviour that adds the page as a bookmark.
      </p>
      <div className="btn-group">
        <ul className="list-group">
          <li className={`list-group-item ${active ? 'active' : ''}`}>Carrot cake</li>
          <li className={`list-group-item ${active ? 'active' : ''}`}>Marzipan cotton candy</li>
          <li className={`list-group-item ${active ? 'active' : ''}`}>Pie macaroon</li>
          <li className={`list-group-item ${active ? 'active' : ''}`}>Oat cake</li>
          <li className={`list-group-item ${active ? 'active' : ''}`}>Lemon drops</li>
          <li className={`list-group-item ${active ? 'active' : ''}`}>Cotton candy</li>
        </ul>
      </div>
    </>
  );
};

export default ShotcutOverridingDefaults;
