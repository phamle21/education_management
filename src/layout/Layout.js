import apiBase from 'app/axios/apiBase';
import { setCurrentUser } from 'auth/authSlice';
import useLayout from 'hooks/useLayout';
import Footer from 'layout/footer/Footer';
import Nav from 'layout/nav/Nav';
import SidebarMenu from 'layout/nav/sidebar-menu/SidebarMenu';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  useLayout();

  if (localStorage.getItem('accessTokenEducationAdmin') === null) {
    return <Redirect to="/login" />
  }

  function isObjectEmpty(value) {
    return (
      Object.prototype.toString.call(value) === '[object Object]' &&
      JSON.stringify(value) === '{}'
    );
  }

  const { currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  if (localStorage.getItem('accessTokenEducationAdmin') !== null && isObjectEmpty(currentUser)) {
    apiBase.post('/me').then(res => {
      
      // Reduxt
      dispatch(setCurrentUser({
        currentUser: res.data,
        userToken: localStorage.getItem('accessTokenEducationAdmin')
      }))
    }).catch(error => {
      if (error.response.status === 401) { // "Unauthorized"
        localStorage.removeItem('accessTokenEducationAdmin')
        window.location.href = '/login'
      }
    })
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
