import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { scrollspySetItems } from './scrollspySlice';
import ScrollspyContent from './ScrollspyContent';

const Scrollspy = ({ items = [], width = '' }) => {
  const dispatch = useDispatch();
  const { hash } = useLocation();
  useEffect(() => {
    document.documentElement.setAttribute('data-scrollspy', 'true');
    if (hash) {
      setTimeout(() => {
        try {
          document.querySelector(hash).scrollIntoView();
        } catch (e) {
          console.info(`[${hash}] element not found.`);
        }
      }, 30);
    }
    return () => {
      document.documentElement.removeAttribute('data-scrollspy');
    };
  }, [hash]);

  useEffect(() => {
    dispatch(scrollspySetItems(items));
    return () => {
      dispatch(scrollspySetItems([]));
    };
  }, [items, dispatch]);

  return (
    <>
      <Col md="auto" className="d-none d-lg-block" id="scrollSpyMenu" style={{ width }}>
        <ScrollspyContent items={items} />
      </Col>
    </>
  );
};

export default React.memo(Scrollspy);
