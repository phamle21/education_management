import apiBase from 'app/axios/apiBase';
import { setCurrentUser } from 'auth/authSlice';
import useLayout from 'hooks/useLayout';
import Footer from 'layout/footer/Footer';
import Nav from 'layout/nav/Nav';
import SidebarMenu from 'layout/nav/sidebar-menu/SidebarMenu';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  useLayout();

  if (localStorage.getItem('accessTokenEducation') === null) {
    return <Redirect to="/login" />
  }
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.click();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [pathname]);
  return (
    <>
      <Nav />
      <main>
        <Container>
          <Row className="h-100">
            <SidebarMenu />
            <Col className="h-100" id="contentArea">
              {children}
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
      {/* <RightButtons /> */}
    </>
  );
};

export default React.memo(Layout);
