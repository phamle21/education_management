import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const FormsPage = () => {
  const title = 'Forms';
  const description = 'Elements, layouts and plugins that are needed for the forms.';

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
                <CsLineIcons icon="layout-1" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/forms/layouts" className="heading stretched-link d-block">
                  Layouts
                </NavLink>
                <div className="text-muted">Top labeled, filled, standard and floating label form layouts along side with Bootstrap form rows.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="form-check" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/forms/validation" className="heading stretched-link d-block">
                  Validation
                </NavLink>
                <div className="text-muted">Form validation with the help of javascript and jQuery validation library.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="wizard" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/forms/wizard" className="heading stretched-link d-block">
                  Wizard
                </NavLink>
                <div className="text-muted">Wizard implementation on top of Bootstrap's tab system.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="input" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/forms/input-mask" className="heading stretched-link d-block">
                  Input Mask
                </NavLink>
                <div className="text-muted">A javascript input mask library that helps the user with the input by ensuring a predefined format.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="form" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/forms/generic-forms" className="heading stretched-link d-block">
                  Generic Forms
                </NavLink>
                <div className="text-muted">Generic form examples with validation and different layouts.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="button" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/forms/controls" className="heading stretched-link d-block">
                  Controls
                </NavLink>
                <div className="text-muted">External components that are styled for the template.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* List Items End */}
    </>
  );
};

export default FormsPage;
