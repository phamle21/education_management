import React, { useState } from 'react';
import { Alert, Button, Card, Col, Row } from 'react-bootstrap';
import Scrollspy from 'components/scrollspy/Scrollspy';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';

const AlertPage = () => {
  const title = 'Alert';
  const description = 'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/components', text: 'Components' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'default', text: 'Default' },
    { id: 'linkColor', text: 'Link Color' },
    { id: 'additionalContent', text: 'Additional Content' },
    { id: 'dismissing', text: 'Dismissing' },
  ];

  const [dismissingAlertShow, setDismissingAlertShow] = useState(true);

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

          {/* Default Alerts Start */}
          <section className="scroll-section" id="default">
            <h2 className="small-title">Default</h2>
            <Card className="mb-5" body>
              <Alert variant="primary">A simple primary alert—check it out!</Alert>
              <Alert variant="secondary">A simple secondary alert—check it out!</Alert>
              <Alert variant="success">A simple success alert—check it out!</Alert>
              <Alert variant="danger">A simple danger alert—check it out!</Alert>
              <Alert variant="warning">A simple warning alert—check it out!</Alert>
              <Alert variant="info">A simple info alert—check it out!</Alert>
              <Alert variant="light">A simple light alert—check it out!</Alert>
              <Alert variant="dark">A simple dark alert—check it out!</Alert>
            </Card>
          </section>
          {/* Default Alerts End */}

          {/* Link Color Start */}
          <section className="scroll-section" id="linkColor">
            <h2 className="small-title">Link Color</h2>
            <Card body className="mb-5">
              <Alert variant="primary">
                A simple primary alert with{' '}
                <a href="#linkColor" className="alert-link">
                  {' '}
                  an example link{' '}
                </a>
                . Give it a click if you like.
              </Alert>
              <Alert variant="secondary">
                A simple secondary alert with{' '}
                <a href="#linkColor" className="alert-link">
                  {' '}
                  an example link{' '}
                </a>
                . Give it a click if you like.
              </Alert>
              <Alert variant="success">
                A simple success alert with{' '}
                <a href="#linkColor" className="alert-link">
                  {' '}
                  an example link{' '}
                </a>
                . Give it a click if you like.
              </Alert>
              <Alert variant="danger">
                A simple danger alert with{' '}
                <a href="#linkColor" className="alert-link">
                  {' '}
                  an example link{' '}
                </a>
                . Give it a click if you like.
              </Alert>
              <Alert variant="warning">
                A simple warning alert with{' '}
                <a href="#linkColor" className="alert-link">
                  {' '}
                  an example link{' '}
                </a>
                . Give it a click if you like.
              </Alert>
              <Alert variant="info">
                A simple info alert with{' '}
                <a href="#linkColor" className="alert-link">
                  {' '}
                  an example link{' '}
                </a>
                . Give it a click if you like.
              </Alert>
              <Alert variant="light">
                A simple light alert with{' '}
                <a href="#linkColor" className="alert-link">
                  {' '}
                  an example link{' '}
                </a>
                . Give it a click if you like.
              </Alert>
              <Alert variant="dark">
                A simple dark alert with{' '}
                <a href="#linkColor" className="alert-link">
                  {' '}
                  an example link{' '}
                </a>
                . Give it a click if you like.
              </Alert>
            </Card>
          </section>
          {/* Link Color End */}

          {/* Additional Content Start */}
          <section className="scroll-section" id="additionalContent">
            <h2 className="small-title">Additional Content</h2>
            <Card body className="mb-5">
              <Alert variant="success">
                <Alert.Heading>Well done!</Alert.Heading>
                <p>
                  Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing
                  within an alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy. </p>
              </Alert>
            </Card>
          </section>
          {/* Additional Content End */}

          {/* Dismissing Start */}
          <section className="scroll-section" id="dismissing">
            <h2 className="small-title">Dismissing</h2>
            <Card body>
              {dismissingAlertShow && (
                <Alert variant="warning" onClose={() => setDismissingAlertShow(false)} dismissible>
                  <strong>Holy guacamole! </strong> You should check in on some of those fields below.
                </Alert>
              )}
              {!dismissingAlertShow && <Button onClick={() => setDismissingAlertShow(true)}>Show Alert</Button>}
            </Card>
          </section>
          {/* Dismissing End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default AlertPage;
