import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const MenuPage = () => {
  const title = 'Menu';
  const description = 'Different menu types that can be configured further.';

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
                <CsLineIcons icon="menu" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/content/menu/horizontal" className="heading stretched-link d-block">
                  Horizontal
                </NavLink>
                <div className="text-muted">Horizontal standard menu that turns into mobile menu for smaller screens.</div>
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
                <NavLink to="/interface/content/menu/vertical" className="heading stretched-link d-block">
                  Vertical
                </NavLink>
                <div className="text-muted">
                  Standard vertical menu that can be pinned for larger screens, switches to semi-hidden state for tablet sizes and shows mobile menu for smaller
                  screens.
                </div>
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
                <NavLink to="/interface/content/menu/vertical-hidden" className="heading stretched-link d-block">
                  Vertical Hidden
                </NavLink>
                <div className="text-muted">A vertical menu that newer shows larger pinned version and switches between mobile view and semi-hidden view.</div>
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
                <NavLink to="/interface/content/menu/vertical-no-hidden" className="heading stretched-link d-block">
                  Vertical No Hidden
                </NavLink>
                <div className="text-muted">
                  A vertical menu that never gets into semi-hidden state and switches to mobile view directly after desktop view.
                </div>
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
                <NavLink to="/interface/content/menu/mobile-only" className="heading stretched-link d-block">
                  Mobile Only
                </NavLink>
                <div className="text-muted">Shows only the mobile menu regardless of the screen resolution.</div>
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
                <NavLink to="/interface/content/menu/sidebar" className="heading stretched-link d-block">
                  Sidebar
                </NavLink>
                <div className="text-muted">
                  A secondary in page menu that blends into the mobile menu for smaller screens. Can be used with both horizontal and vertical menu types.
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* List Items End */}
    </>
  );
};

export default MenuPage;
