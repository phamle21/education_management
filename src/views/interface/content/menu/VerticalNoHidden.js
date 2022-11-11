import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { MENU_BEHAVIOUR, MENU_PLACEMENT } from 'constants.js';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import useCustomLayout from 'hooks/useCustomLayout';

const VerticalNoHiddenMenuPage = () => {
  const title = 'Vertical No Hidden Menu';
  const description = 'A vertical menu that never gets into semi-hidden state and switches to mobile view directly after desktop view.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/content', text: 'Content' },
    { to: 'interface/content/menu', text: 'Menu' },
  ];
  useCustomLayout({
    placement: MENU_PLACEMENT.Vertical,
    behaviour: MENU_BEHAVIOUR.Pinned,
    breakpoints: {
      verticalUnpinned: 1200,
      verticalMobile: 1200,
    },
    pinEnable: false,
  });
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
    </>
  );
};

export default VerticalNoHiddenMenuPage;
