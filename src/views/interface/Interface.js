import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const InterfacePage = () => {
  const title = 'Interface';
  const description =
    'User interface elements that provides control over various content and layout. They are styled in a harmony with the rest of the template.';

  const breadcrumbs = [{ to: '', text: 'Home' }];

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
                <CsLineIcons icon="boxes" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/components" className="heading stretched-link d-block">
                  Components
                </NavLink>
                <div className="text-muted">Bootstrap components styled for the template as the core of the project.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="switch-off" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/forms" className="heading stretched-link d-block">
                  Forms
                </NavLink>
                <div className="text-muted">Elements, layouts, validation and plugins that are needed for the forms.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="puzzle" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/plugins" className="heading stretched-link d-block">
                  Plugins
                </NavLink>
                <div className="text-muted">Various implementations of plugins that are styled for the harmony of the template.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="news" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/content" className="heading stretched-link d-block">
                  Content
                </NavLink>
                <div className="text-muted">Icons, images and typography of the project, and navigation options.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* List Items End */}
    </>
  );
};

export default InterfacePage;
