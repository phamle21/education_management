import React, { useEffect, useRef, useState } from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const ScrollByCount = ({ count = 1, children }) => {
  const [scrollVisible, setScrollVisible] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const height = (containerRef.current.clientHeight / children.length) * count;
      setScrollVisible(true);
      setScrollHeight(height);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div ref={containerRef}>
      {scrollVisible ? (
        <OverlayScrollbarsComponent
          style={{ height: scrollHeight }}
          options={{ scrollbars: { autoHide: 'leave', autoHideDelay: 600 }, overflowBehavior: { x: 'hidden', y: 'scroll' } }}
        >
          {children}
        </OverlayScrollbarsComponent>
      ) : (
        children
      )}
    </div>
  );
};

export default ScrollByCount;
