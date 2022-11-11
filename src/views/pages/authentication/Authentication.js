import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const AuthenticationPage = () => {
  const title = 'Authentication';
  const description = 'User verification, registration and recovery pages.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'pages', text: 'Pages' },
  ];

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Row>
        <Col>
          {/* Title Start */}
          <section className="scroll-section" id="title">
            <div className="page-title-container">
              <h1 className="mb-0 pb-0 display-4">{title}</h1>
              <BreadcrumbList items={breadcrumbs} />
            </div>
            <Card className="mb-5" body>
              <Card.Text>{description}</Card.Text>
            </Card>
          </section>
          {/* Title End */}
        </Col>
      </Row>
      {/* List Items Start */}
      <Row xs="1" sm="2" xl="3" className="g-2">
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="login" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/authentication/login" className="heading stretched-link d-block">
                  Login
                </NavLink>
                <div className="text-muted">Login form with email and password.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="content" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/authentication/register" className="heading stretched-link d-block">
                  Register
                </NavLink>
                <div className="text-muted">Register form with email, password and password confirmation.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="key" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/authentication/forgot-password" className="heading stretched-link d-block">
                  Forgot Password
                </NavLink>
                <div className="text-muted">Password recovery form with an email field.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="shield" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/authentication/reset-password" className="heading stretched-link d-block">
                  Reset Password
                </NavLink>
                <div className="text-muted">Password reset form with password and password confirmation.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* List Items End */}
    </>
  );
};

export default AuthenticationPage;
