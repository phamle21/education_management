import React, { createRef, useEffect } from 'react';
import ClampJs from 'clamp-js';
import { NavLink } from 'react-router-dom';

const Clamp = ({ tag = 'p', className = '', clamp = 'auto', children, href = '' }) => {
  const clampRef = createRef();
  const TagName = tag;

  useEffect(() => {
    if (clampRef.current) {
      // Single line              {clamp: 1}
      // Multi-line               {clamp: 3}
      // Auto-clamp based on available height        {clamp: 'auto'}
      // Auto-clamp based on a fixed element height  {clamp: '35px'}

      ClampJs(clampRef.current, { clamp });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (href) {
    return (
      <NavLink ref={clampRef} className={`clamp ${className}`} to={href}>
        {children}
      </NavLink>
    );
  }

  return (
    <TagName ref={clampRef} className={`clamp ${className}`}>
      {children}
    </TagName>
  );
};
export default Clamp;
