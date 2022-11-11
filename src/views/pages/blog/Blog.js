import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const BlogPage = () => {
  const title = 'Blog';
  const description = 'Blog pages for home, detail and listing layouts.';

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
                <CsLineIcons icon="home-garage" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/blog/home" className="heading stretched-link d-block">
                  Home
                </NavLink>
                <div className="text-muted">Blog home page with a cta carousel and blog post cards.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="grid-1" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/blog/grid" className="heading stretched-link d-block">
                  Grid
                </NavLink>
                <div className="text-muted">Blog post cards within a grid layout. Also contains a sidebar with various content.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="grid-2" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/blog/list" className="heading stretched-link d-block">
                  List
                </NavLink>
                <div className="text-muted">Blog post list page with a sidebar that contains various content.</div>
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
                <NavLink to="/pages/blog/detail" className="heading stretched-link d-block">
                  Detail
                </NavLink>
                <div className="text-muted">Detail page for the blog content which also has a sidebar and author section.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* List Items End */}
    </>
  );
};

export default BlogPage;
