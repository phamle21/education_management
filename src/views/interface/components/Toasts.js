import React, { useState } from 'react';
import { Row, Col, Card, Toast, ToastContainer, Button, CloseButton, Form } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Scrollspy from 'components/scrollspy/Scrollspy';

const Template = () => {
  const title = 'Toasts';
  const description = 'Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/components', title: 'Components' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'default', text: 'Default' },
    { id: 'translucent', text: 'Translucent' },
    { id: 'stacking', text: 'Stacking' },
    { id: 'customContent', text: 'Custom Content' },
    { id: 'colorSchemes', text: 'Color Schemes' },
    { id: 'placementExample', text: 'Placement' },
  ];

  const [customToastShow, setCustomToastShow] = useState(true);
  const [customToast2Show, setCustomToast2Show] = useState(true);
  const [position, setPosition] = useState('middle-center');

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

          {/* Default Start */}
          <section className="scroll-section" id="default">
            <h2 className="small-title">Default</h2>
            <Card body className="mb-5">
              <Toast>
                <Toast.Header>
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
              </Toast>
            </Card>
          </section>
          {/* Default End */}

          {/* Translucent Start */}
          <section className="scroll-section" id="translucent">
            <h2 className="small-title">Translucent</h2>
            <div className="card mb-5 bg-primary">
              <div className="card-body">
                <Toast>
                  <Toast.Header>
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                </Toast>
              </div>
            </div>
          </section>
          {/* Translucent End */}

          {/* Stacking Start */}
          <section className="scroll-section" id="stacking">
            <h2 className="small-title">Stacking</h2>
            <Card body className="mb-5">
              <ToastContainer>
                <Toast className="mb-2">
                  <Toast.Header>
                    <strong className="me-auto">Bootstrap</strong>
                    <small className="text-muted">just now</small>
                  </Toast.Header>
                  <Toast.Body>See? Just like this.</Toast.Body>
                </Toast>
                <Toast>
                  <Toast.Header>
                    <strong className="me-auto">Bootstrap</strong>
                    <small className="text-muted">2 seconds ago</small>
                  </Toast.Header>
                  <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                </Toast>
              </ToastContainer>
            </Card>
          </section>
          {/* Stacking End */}

          {/* Custom Content Start */}
          <section className="scroll-section" id="customContent">
            <h2 className="small-title">Custom Content</h2>
            <Card body className="mb-5">
              <Toast className="mb-2 align-items-center" show={customToastShow}>
                <div className="d-flex">
                  <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                  <CloseButton className="me-2 m-auto" onClick={() => setCustomToastShow(false)} />
                </div>
              </Toast>

              <Toast show={customToast2Show}>
                <div className="d-flex">
                  <Toast.Body>
                    Hello, world! This is a toast message.
                    <div className="mt-2 pt-2 border-top">
                      <Button variant="primary" size="sm">
                        Take action
                      </Button>{' '}
                      <Button variant="secondary" size="sm" onClick={() => setCustomToast2Show(false)}>
                        Close
                      </Button>
                    </div>
                  </Toast.Body>
                </div>
              </Toast>
            </Card>
          </section>
          {/* Custom Content End */}

          {/* Color Schemes Start */}
          <section className="scroll-section" id="colorSchemes">
            <h2 className="small-title">Color Schemes</h2>
            <Card body className="mb-5">
              <Toast className="mb-2 align-items-center bg-primary border-0">
                <div className="d-flex">
                  <Toast.Body className="text-white">Hello, world! This is a toast message.</Toast.Body>
                  <CloseButton className="me-2 m-auto" variant="white" />
                </div>
              </Toast>
              <Toast className="mb-2 align-items-center bg-secondary border-0">
                <div className="d-flex">
                  <Toast.Body className="text-white">Hello, world! This is a toast message.</Toast.Body>
                  <CloseButton className="me-2 m-auto" variant="white" />
                </div>
              </Toast>
            </Card>
          </section>
          {/* Color Schemes End */}

          {/* Placement Start */}
          <section className="scroll-section" id="placementExample">
            <h2 className="small-title">Placement</h2>
            <Card body className="mb-5">
              <form>
                <div className="mb-3">
                  <label htmlFor="selectToastPlacement">Toast placement</label>
                  <Form.Select id="selectToastPlacement" className="mt-2" onChange={(e) => setPosition(e.currentTarget.value)}>
                    {['top-start', 'top-center', 'top-end', 'middle-start', 'middle-center', 'middle-end', 'bottom-start', 'bottom-center', 'bottom-end'].map(
                      (p) => (
                        <option key={p} value={p} selected={position === p}>
                          {p}
                        </option>
                      )
                    )}
                  </Form.Select>
                </div>
              </form>
              <div aria-live="polite" aria-atomic="true" className="bg-primary position-relative sh-50">
                <ToastContainer className="p-3" position={position}>
                  <Toast>
                    <Toast.Header closeButton={false}>
                      <strong className="me-auto">Bootstrap</strong>
                      <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                  </Toast>
                </ToastContainer>
              </div>
            </Card>
          </section>
          {/* Placement End */}
        </Col>

        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Template;
