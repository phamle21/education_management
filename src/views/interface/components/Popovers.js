import React from 'react';
import { Row, Col, Card, OverlayTrigger, Popover, Button } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Scrollspy from 'components/scrollspy/Scrollspy';

const PopoversPage = () => {
  const title = 'Popover';
  const description = 'Examples for adding Bootstrap popovers, like those found in iOS.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/components', title: 'Components' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'default', text: 'Default' },
    { id: 'directions', text: 'Directions' },
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
          {/* Default Start */}
          <section className="scroll-section" id="default">
            <h2 className="small-title">Default</h2>
            <Card body className="mb-5">
              <OverlayTrigger
                rootClose
                trigger="click"
                placement="top"
                overlay={
                  <Popover id="popover-basic-dismissible">
                    <Popover.Header>Dismissible popover</Popover.Header>
                    <Popover.Body>And here's some amazing content. It's very engaging. Right?</Popover.Body>
                  </Popover>
                }
              >
                <Button variant="outline-primary" size="lg" className="mb-1">
                  Dismissible popover
                </Button>
              </OverlayTrigger>{' '}
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <Popover id="popover-basic-default">
                    <Popover.Header>Popper Title</Popover.Header>
                    <Popover.Body>And here's some amazing content. It's very engaging. Right?</Popover.Body>
                  </Popover>
                }
              >
                <Button variant="outline-primary" size="lg" className="mb-1">
                  Click to toggle popover
                </Button>
              </OverlayTrigger>{' '}
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <Popover id="popover-basic-disabled">
                    <Popover.Body>Disabled popover</Popover.Body>
                  </Popover>
                }
              >
                <Button disabled className="pe-none mb-1">
                  Disabled button
                </Button>
              </OverlayTrigger>
            </Card>
          </section>
          {/* Default End */}

          {/* Directions Start */}
          <section className="scroll-section" id="directions">
            <h2 className="small-title">Directions</h2>
            <Card body className="mb-5">
              <OverlayTrigger
                rootClose
                trigger="click"
                placement="top"
                overlay={
                  <Popover id="popover-basic-top">
                    <Popover.Body>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Body>
                  </Popover>
                }
              >
                <Button variant="outline-secondary" className="mb-1">
                  Popover on top
                </Button>
              </OverlayTrigger>{' '}
              <OverlayTrigger
                rootClose
                trigger="click"
                placement="right"
                overlay={
                  <Popover id="popover-basic-right">
                    <Popover.Body>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Body>
                  </Popover>
                }
              >
                <Button variant="outline-secondary" className="mb-1">
                  Popover on right
                </Button>
              </OverlayTrigger>{' '}
              <OverlayTrigger
                rootClose
                trigger="click"
                placement="bottom"
                overlay={
                  <Popover id="popover-basic-bottom">
                    <Popover.Body>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Body>
                  </Popover>
                }
              >
                <Button variant="outline-secondary" className="mb-1">
                  Popover on bottom
                </Button>
              </OverlayTrigger>{' '}
              <OverlayTrigger
                rootClose
                trigger="click"
                placement="left"
                overlay={
                  <Popover id="popover-basic-left">
                    <Popover.Body>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Body>
                  </Popover>
                }
              >
                <Button variant="outline-secondary" className="mb-1">
                  Popover on left
                </Button>
              </OverlayTrigger>{' '}
            </Card>
          </section>
          {/* Directions End */}
        </Col>

        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default PopoversPage;
