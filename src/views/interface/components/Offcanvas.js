import React, { useState } from 'react';
import { Row, Col, Card, Offcanvas, Dropdown, Button } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Scrollspy from 'components/scrollspy/Scrollspy';

const OffcanvasPage = () => {
  const title = 'Offcanvas';
  const description = 'Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/components', title: 'Components' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'default', text: 'Default' },
    { id: 'placement', text: 'Placement' },
    { id: 'backdrop', text: 'Backdrop' },
  ];

  const [defaultShow, setDefaultShow] = useState(false);
  const [rightPlacementShow, setRightPlacementShow] = useState(false);
  const [bottomPlacementShow, setBottomPlacementShow] = useState(false);
  const [topPlacementShow, setTopPlacementShow] = useState(false);

  const [enableBodyScrollingShow, setEnableBodyScrollingShow] = useState(false);
  const [enableBackdropShow, setEnableBackdropShow] = useState(false);
  const [enableBothScrollingShow, setEnableBothScrollingShow] = useState(false);

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
            <Card body className=" mb-5">
              <Button variant="primary" onClick={() => setDefaultShow(true)}>
                Launch
              </Button>
              <Offcanvas show={defaultShow} onHide={() => setDefaultShow(false)}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
                  <Dropdown className="mt-3">
                    <Dropdown.Toggle variant="secondary">Dropdown Button</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Offcanvas.Body>
              </Offcanvas>
            </Card>
          </section>
          {/* Default End */}

          {/* Placement Start */}
          <section className="scroll-section" id="placementExample">
            <h2 className="small-title">Placement</h2>
            <Card body className="mb-5">
              <Button variant="primary" onClick={() => setRightPlacementShow(true)}>
                Enable body scrolling
              </Button>{' '}
              <Button variant="primary" onClick={() => setBottomPlacementShow(true)}>
                Toggle bottom offcanvas
              </Button>{' '}
              <Button variant="primary" onClick={() => setTopPlacementShow(true)}>
                Toggle top offcanvas
              </Button>
              <Offcanvas placement="end" show={rightPlacementShow} onHide={() => setRightPlacementShow(false)}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas Right</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>...</Offcanvas.Body>
              </Offcanvas>
              <Offcanvas placement="bottom" show={bottomPlacementShow} onHide={() => setBottomPlacementShow(false)}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas Bottom</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>...</Offcanvas.Body>
              </Offcanvas>
              <Offcanvas placement="top" show={topPlacementShow} onHide={() => setTopPlacementShow(false)}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas Top</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>...</Offcanvas.Body>
              </Offcanvas>
            </Card>
          </section>
          {/* Placement End */}

          {/* Backdrop Start */}
          <section className="scroll-section" id="backdrop">
            <h2 className="small-title">Backdrop</h2>
            <Card body className="mb-5">
              <Button variant="primary" onClick={() => setEnableBodyScrollingShow(true)}>
                Enable body scrolling
              </Button>{' '}
              <Button variant="primary" onClick={() => setEnableBackdropShow(true)}>
                Enable backdrop (default)
              </Button>{' '}
              <Button variant="primary" onClick={() => setEnableBothScrollingShow(true)}>
                Enable both scrolling & backdrop
              </Button>
              <Offcanvas backdrop={false} scroll show={enableBodyScrollingShow} onHide={() => setEnableBodyScrollingShow(false)}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Colored with scrolling</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <p>Try scrolling the rest of the page to see this option in action.</p>
                </Offcanvas.Body>
              </Offcanvas>
              <Offcanvas backdrop scroll={false} show={enableBackdropShow} onHide={() => setEnableBackdropShow(false)}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas with backdrop</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <p>.....</p>
                </Offcanvas.Body>
              </Offcanvas>
              <Offcanvas backdrop scroll show={enableBothScrollingShow} onHide={() => setEnableBothScrollingShow(false)}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Backdroped with scrolling</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <p>Try scrolling the rest of the page to see this option in action.</p>
                </Offcanvas.Body>
              </Offcanvas>
            </Card>
          </section>
          {/* Backdrop End */}
        </Col>

        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default OffcanvasPage;
