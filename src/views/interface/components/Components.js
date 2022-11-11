import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ComponentsPage = () => {
  const title = 'Components';
  const description = 'Bootstrap components styled for the template as the core of the project.';

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
                <CsLineIcons icon="accordion" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/components/accordion" className="heading stretched-link d-block">
                  Accordion
                </NavLink>
                <div className="text-muted">Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <div className="col-auto">
                <CsLineIcons icon="warning-hexagon" className="text-primary" />
              </div>
              <Col>
                <NavLink to="/interface/components/alerts" className="heading stretched-link d-block">
                  Alerts
                </NavLink>
                <div className="text-muted">
                  Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <div className="col-auto">
                <CsLineIcons icon="tag" className="text-primary" />
              </div>
              <Col>
                <NavLink to="/interface/components/badge" className="heading stretched-link d-block">
                  Badge
                </NavLink>
                <div className="text-muted">Examples for badges, our small count and labeling component.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <div className="col-auto">
                <CsLineIcons icon="menu-shrink" className="text-primary" />
              </div>
              <Col>
                <NavLink to="/interface/components/breadcrumb" className="heading stretched-link d-block">
                  Breadcrumb
                </NavLink>
                <div className="text-muted">
                  Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <div className="col-auto">
                <CsLineIcons icon="button-group" className="text-primary" />
              </div>
              <Col>
                <NavLink to="/interface/components/button-group" className="heading stretched-link d-block">
                  Button Group
                </NavLink>
                <div className="text-muted">
                  Group a series of buttons together on a single line with the button group, and super-power them with JavaScript.
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <div className="col-auto">
                <CsLineIcons icon="button" className="text-primary" />
              </div>
              <Col>
                <NavLink to="/interface/components/buttons" className="heading stretched-link d-block">
                  Buttons
                </NavLink>
                <div className="text-muted">
                  Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <div className="col-auto">
                <CsLineIcons icon="content" className="text-primary" />
              </div>
              <Col>
                <NavLink to="/interface/components/card" className="heading stretched-link d-block">
                  Card
                </NavLink>
                <div className="text-muted">
                  Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options. We have extended them to create
                  cards for icons, videos, products and so on.
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <div className="col-auto">
                <CsLineIcons icon="collapse" className="text-primary" />
              </div>
              <Col>
                <NavLink to="/interface/components/collapse" className="heading stretched-link d-block">
                  Collapse
                </NavLink>
                <div className="text-muted">Toggle the visibility of content across your project with a few classes and our JavaScript plugins.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <div className="col-auto">
                <CsLineIcons icon="dropdown" className="text-primary" />
              </div>
              <Col>
                <NavLink to="/interface/components/dropdowns" className="heading stretched-link d-block">
                  Dropdowns
                </NavLink>
                <div className="text-muted">Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <div className="col-auto">
                <CsLineIcons icon="list" className="text-primary" />
              </div>
              <Col>
                <NavLink to="/interface/components/list-group" className="heading stretched-link d-block">
                  List Group
                </NavLink>
                <div className="text-muted">
                  List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content
                  within.
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <div className="col-auto">
                <CsLineIcons icon="layout-4" className="text-primary" />
              </div>
              <Col>
                <NavLink to="/interface/components/modal" className="heading stretched-link d-block">
                  Modal
                </NavLink>
                <div className="text-muted">
                  Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <div className="col-auto">
                <CsLineIcons icon="compass" className="text-primary" />
              </div>
              <Col>
                <NavLink to="/interface/components/navs" className="heading stretched-link d-block">
                  Navs
                </NavLink>
                <div className="text-muted">Examples for how to use Bootstrap’s included navigation components.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <div className="col-auto">
                <CsLineIcons icon="book-open" className="text-primary" />
              </div>
              <Col>
                <NavLink to="/interface/components/pagination" className="heading stretched-link d-block">
                  Pagination
                </NavLink>
                <div className="text-muted">Examples for showing pagination to indicate a series of related content exists across multiple pages.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <div className="col-auto">
                <CsLineIcons icon="duplicate" className="text-primary" />
              </div>
              <Col>
                <NavLink to="/interface/components/popovers" className="heading stretched-link d-block">
                  Popovers
                </NavLink>
                <div className="text-muted">Examples for adding Bootstrap popovers, like those found in iOS.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <div className="col-auto">
                <CsLineIcons icon="arrow-right" className="text-primary" />
              </div>
              <Col>
                <NavLink to="/interface/components/progress" className="heading stretched-link d-block">
                  Progress
                </NavLink>
                <div className="text-muted">
                  Examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <div className="col-auto">
                <CsLineIcons icon="spinner" className="text-primary" />
              </div>
              <Col>
                <NavLink to="/interface/components/spinners" className="heading stretched-link d-block">
                  Spinners
                </NavLink>
                <div className="text-muted">
                  Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <div className="col-auto">
                <CsLineIcons icon="warning-hexagon" className="text-primary" />
              </div>
              <Col>
                <NavLink to="/interface/components/toasts" className="heading stretched-link d-block">
                  Toasts
                </NavLink>
                <div className="text-muted">Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <div className="col-auto">
                <CsLineIcons icon="messages" className="text-primary" />
              </div>
              <Col>
                <NavLink to="/interface/components/tooltips" className="heading stretched-link d-block">
                  Tooltips
                </NavLink>
                <div className="text-muted">
                  Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-attributes for
                  local title storage.
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

export default ComponentsPage;
