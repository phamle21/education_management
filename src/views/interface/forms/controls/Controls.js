import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ControlsPage = () => {
  const title = 'Controls';
  const description = 'External components that are styled for the template.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/forms', text: 'Forms' },
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
                <CsLineIcons icon="input" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/forms/controls/autocomplete" className="heading stretched-link d-block">
                  Autocomplete
                </NavLink>
                <div className="text-muted">WAI-ARIA compliant React autosuggest component.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="check-square" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/forms/controls/checkbox-radio" className="heading stretched-link d-block">
                  Checkbox Radio
                </NavLink>
                <div className="text-muted">Custom radio, checkbox and switch examples of Bootstrap.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="calendar" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/forms/controls/date-picker" className="heading stretched-link d-block">
                  Date Picker
                </NavLink>
                <div className="text-muted">A simple and reusable datepicker component for React.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="upload" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/forms/controls/dropzone" className="heading stretched-link d-block">
                  Dropzone
                </NavLink>
                <div className="text-muted">Simple React hook to create a HTML5-compliant drag and drop zone for files.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="editor" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/forms/controls/editor" className="heading stretched-link d-block">
                  Editor
                </NavLink>
                <div className="text-muted">A Quill component for React.</div>
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
                <NavLink to="/interface/forms/controls/input-spinner" className="heading stretched-link d-block">
                  Input Spinner
                </NavLink>
                <div className="text-muted">A basic input number spinner.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="star" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/forms/controls/rating" className="heading stretched-link d-block">
                  Rating
                </NavLink>
                <div className="text-muted">A rating react component with custom symbols.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="dropdown" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/forms/controls/select" className="heading stretched-link d-block">
                  Select
                </NavLink>
                <div className="text-muted">The Select Component for React.js</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body className="row gx-4">
              <Col xs="auto">
                <CsLineIcons icon="settings-2" className="text-primary" />
              </Col>
              <Col>
                <NavLink to="/interface/forms/controls/slider" className="heading stretched-link d-block">
                  Slider
                </NavLink>
                <div className="text-muted">Slider UI component for React</div>
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
                <NavLink to="/interface/forms/controls/tags" className="heading stretched-link d-block">
                  Tags
                </NavLink>
                <div className="text-muted">A fantastically simple tagging component for your React projects.</div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* List Items End */}
    </>
  );
};

export default ControlsPage;
