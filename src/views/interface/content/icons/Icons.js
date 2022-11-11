import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const IconsPage = () => {
  const title = 'Icons';
  const description = 'Icons of the template.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/content', text: 'Content' },
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
                <CsLineIcons icon="acorn" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/content/icons/cs-line-icons" className="heading stretched-link d-block">
                  CS Line Icons
                </NavLink>
                <div className="text-muted">A cute line icon set crafted exclusively for Acorn.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="acorn" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/content/icons/cs-interface-icons" className="heading stretched-link d-block">
                  CS Interface Icons
                </NavLink>
                <div className="text-muted">An essential and smaller version of CS Line icons in font format.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="bootstrap" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/content/icons/bootstrap-icons" className="heading stretched-link d-block">
                  Bootstrap Icons
                </NavLink>
                <div className="text-muted">Free, high quality, open source icon library with over 1,300 icons.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* List Items End */}
    </>
  );
};

export default IconsPage;
