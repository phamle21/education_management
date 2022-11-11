import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const DashboardsPage = () => {
  const title = 'Dashboards';
  const description =
    'Dashboard pages contains different layouts to provide stats, graphics, listings, categories, banners and so on. They have various implementations of plugins such as Datatables, Chart.js, Glide.js and Plyr.js with alternative extensions.';
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
                <CsLineIcons icon="board-1" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/dashboards/default" className="heading stretched-link d-block">
                  Default
                </NavLink>
                <div className="text-muted">Home screen that contains stats, charts, call to action buttons and various listing elements.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="board-3" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/dashboards/visual" className="heading stretched-link d-block">
                  Visual
                </NavLink>
                <div className="text-muted">A dashboard implementation that mainly has visual items such as banners, call to action buttons and stats.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="board-2" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/dashboards/analytic" className="heading stretched-link d-block">
                  Analytic
                </NavLink>
                <div className="text-muted">Another dashboard alternative that focused on data, listing and charts.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* List Items End */}
    </>
  );
};

export default DashboardsPage;
