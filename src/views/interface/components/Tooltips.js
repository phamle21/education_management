import React from 'react';
import { Row, Col, Card, Tooltip, OverlayTrigger, Button } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Scrollspy from 'components/scrollspy/Scrollspy';

const TooltipsPage = () => {
  const title = 'Tooltip';
  const description =
    'Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-attributes for local title storage.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/components', title: 'Components' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'directions', text: 'Directions' },
    { id: 'tooltipWithHtml', text: 'Tooltip with Html' },
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

          {/*  Directions Start */}
          <section className="scroll-section" id="directions">
            <h2 className="small-title">Directions</h2>
            <Card body className="mb-5">
              <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Tooltip on top.</Tooltip>}>
                <Button variant="outline-secondary" className="mb-1">
                  Tooltip on top
                </Button>
              </OverlayTrigger>{' '}
              <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-right">Tooltip on right.</Tooltip>}>
                <Button variant="outline-secondary" className="mb-1">
                  Tooltip on right
                </Button>
              </OverlayTrigger>{' '}
              <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-bottom">Tooltip on bottom.</Tooltip>}>
                <Button variant="outline-secondary" className="mb-1">
                  Tooltip on bottom
                </Button>
              </OverlayTrigger>{' '}
              <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-left">Tooltip on left.</Tooltip>}>
                <Button variant="outline-secondary" className="mb-1">
                  Tooltip on left
                </Button>
              </OverlayTrigger>{' '}
            </Card>
          </section>
          {/*  Directions End */}

          {/*  Tooltip with Html Start */}
          <section className="scroll-section" id="tooltipWithHtml">
            <h2 className="small-title">Tooltip with Html</h2>
            <Card body className="mb-5">
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip-with-html">
                    <em>Tooltip</em> <u>with</u> <b>HTML</b>.
                  </Tooltip>
                }
              >
                <Button variant="outline-secondary" className="mb-1">
                  Tooltip with HTML
                </Button>
              </OverlayTrigger>
            </Card>
          </section>
          {/*  Tooltip with Html End */}
        </Col>

        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default TooltipsPage;
