import React from 'react';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ScrollspyContent = React.memo(({ items }) => (
  <ul className="nav flex-column">
    {items.map((item, index) => (
      <li key={index}>
        <a className="nav-link" href={`#${item.id}`}>
          <CsLineIcons icon="chevron-right" />
          <span className="align-middle">{item.text}</span>
        </a>
        {item.subs && (
          <ul className="nav flex-column">
            {item.subs.map((sub, subIndex) => (
              <li key={subIndex}>
                <a className="nav-link" href={`#${sub.id}`}>
                  {sub.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
));
ScrollspyContent.displayName = 'ScrollspyContent';

export default ScrollspyContent;
