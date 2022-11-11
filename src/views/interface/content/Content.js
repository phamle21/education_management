import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ContentPage = () => {
  const title = 'Content';
  const description = 'Images, icons and typography used throughout the project.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
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
                <NavLink to="/interface/content/icons" className="heading stretched-link d-block">
                  Icons
                </NavLink>
                <div className="text-muted">Icons of the template.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="image" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/content/images" className="heading stretched-link d-block">
                  Images
                </NavLink>
                <div className="text-muted">Image usages with static sizes and responsive classes.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="layout-3" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/content/tables" className="heading stretched-link d-block">
                  Tables
                </NavLink>
                <div className="text-muted">Examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="text" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/content/typography" className="heading stretched-link d-block">
                  Typography
                </NavLink>
                <div className="text-muted">Examples for typography, including global settings, headings, body text, lists, and more.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="menu" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/content/menu" className="heading stretched-link d-block">
                  Menu
                </NavLink>
                <div className="text-muted">Different menu types that can be configured further.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* List Items End */}
    </>
  );
};

export default ContentPage;
