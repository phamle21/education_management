import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ProfilePage = () => {
  const title = 'Profile';
  const description = 'Layouts for settings and social aspects of a user page.';

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
                <CsLineIcons icon="user" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/profile/standard" className="heading stretched-link d-block">
                  Standard
                </NavLink>
                <div className="text-muted">User profile page with tab navigation featuring stats, charts and so on.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="settings-2" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/profile/settings" className="heading stretched-link d-block">
                  Settings
                </NavLink>
                <div className="text-muted">Settings page with a menu and categorized inputs.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* List Items End */}
    </>
  );
};

export default ProfilePage;
