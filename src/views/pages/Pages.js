import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const PagesPage = () => {
  const title = 'Pages';
  const description = 'Layouts that are focused on different project needs. Contains html blocks and specific plugins that are fit for the context.';

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
                <CsLineIcons icon="lock-on" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/authentication" className="heading stretched-link d-block">
                  Authentication
                </NavLink>
                <div className="text-muted">User verification, registration and recovery pages.</div>
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
                <NavLink to="/pages/blog" className="heading stretched-link d-block">
                  Blog
                </NavLink>
                <div className="text-muted">Multiple blog pages for home, detail and listing layouts.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="layout-1" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/miscellaneous" className="heading stretched-link d-block">
                  Miscellaneous
                </NavLink>
                <div className="text-muted">Various pages fit to use for error, faq, pricing and so on.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="suitcase" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/portfolio" className="heading stretched-link d-block">
                  Portfolio
                </NavLink>
                <div className="text-muted">Collection of thumbnails and detail page to showcase work.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="user" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/profile" className="heading stretched-link d-block">
                  Profile
                </NavLink>
                <div className="text-muted">Layouts for settings and social aspects of a user page.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* List Items End */}
    </>
  );
};

export default PagesPage;
