import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const PluginsPage = () => {
  const title = 'Plugins';
  const description = 'Various types of plugins that are implemented in the template.';

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
                <CsLineIcons icon="layout-5" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/plugins/carousel" className="heading stretched-link d-block">
                  Carousel
                </NavLink>
                <div className="text-muted">
                  Glidejs is a dependency-free JavaScript ES6 slider and carousel. It’s lightweight, flexible and fast. Designed to slide. No less, no more.
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="chart-2" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/plugins/charts" className="heading stretched-link d-block">
                  Charts
                </NavLink>
                <div className="text-muted">Chart.js provides simple yet flexible JavaScript charting for designers & developers.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="more-horizontal" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/plugins/clamp" className="heading stretched-link d-block">
                  Clamp
                </NavLink>
                <div className="text-muted">Clamps an HTML element by adding ellipsis to it if the content inside is too long.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="menu-bookmark" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/plugins/context-menu" className="heading stretched-link d-block">
                  Context Menu
                </NavLink>
                <div className="text-muted">Management facility for context(right click) menus.</div>
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
                <NavLink to="/interface/plugins/datatables" className="heading stretched-link d-block">
                  Datatables
                </NavLink>
                <div className="text-muted">Lightweight and extensible data tables for React</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="layout-4" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/plugins/lightbox" className="heading stretched-link d-block">
                  Lightbox
                </NavLink>
                <div className="text-muted">Simple and easy to use lightbox script written in pure JavaScript.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="pin" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/plugins/maps" className="heading stretched-link d-block">
                  Maps
                </NavLink>
                <div className="text-muted">Commonly used map providers within an iframe.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="notification" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/plugins/notification" className="heading stretched-link d-block">
                  Notification
                </NavLink>
                <div className="text-muted">React-Toastify allows you to add notifications to your app with ease.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="play" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/plugins/players" className="heading stretched-link d-block">
                  Players
                </NavLink>
                <div className="text-muted">
                  Plyr is a simple, lightweight, accessible and customizable HTML5 and YouTube media player that supports modern browsers.
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="spinner" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/plugins/progress" className="heading stretched-link d-block">
                  Progress
                </NavLink>
                <div className="text-muted">A circular progressbar component, built with SVG and extensively customizable.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="mouse" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/plugins/scrollbar" className="heading stretched-link d-block">
                  Scrollbar
                </NavLink>
                <div className="text-muted">
                  A javascript scrollbar plugin which hides native scrollbars, provides custom styleable overlay scrollbars. Also, webkit scrollbar overrides.
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="shortcut" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/plugins/shortcuts" className="heading stretched-link d-block">
                  Shortcuts
                </NavLink>
                <div className="text-muted">A simple library for handling keyboard shortcuts in Javascript.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="sort" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/plugins/sortable" className="heading stretched-link d-block">
                  Sortable
                </NavLink>
                <div className="text-muted">SSortable is a JavaScript library for reorderable drag-and-drop lists.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* List Items End */}
    </>
  );
};

export default PluginsPage;
