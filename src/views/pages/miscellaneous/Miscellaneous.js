import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const MiscellaneousPage = () => {
  const title = 'Miscellaneous';
  const description = 'Various pages fit to use for error, faq, pricing and so on.';

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
                <CsLineIcons icon="alarm" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/miscellaneous/coming-soon" className="heading stretched-link d-block">
                  Coming Soon
                </NavLink>
                <div className="text-muted">A basic countdown page with an email input for newsletter.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="file-empty" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/miscellaneous/empty" className="heading stretched-link d-block">
                  Empty
                </NavLink>
                <div className="text-muted">An empty page that only contains basic script and styling.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="error-hexagon" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/miscellaneous/error" className="heading stretched-link d-block">
                  Error
                </NavLink>
                <div className="text-muted">Error page with error code and a back to home button.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="help" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/miscellaneous/faq" className="heading stretched-link d-block">
                  Faq
                </NavLink>
                <div className="text-muted">Help page with accordion content and a sidebar.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="notebook-1" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/miscellaneous/knowledge-base" className="heading stretched-link d-block">
                  Knowledge Base
                </NavLink>
                <div className="text-muted">A help page with search, categorized articles and sidebar.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="email" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/miscellaneous/mailing" className="heading stretched-link d-block">
                  Mailing
                </NavLink>
                <div className="text-muted">Inline styled email templates.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="tag" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/miscellaneous/pricing" className="heading stretched-link d-block">
                  Pricing
                </NavLink>
                <div className="text-muted">Price page with a faq section.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="search" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/pages/miscellaneous/search" className="heading stretched-link d-block">
                  Search
                </NavLink>
                <div className="text-muted">Search result page with filter button and search input.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* List Items End */}
    </>
  );
};

export default MiscellaneousPage;
