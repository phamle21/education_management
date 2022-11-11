import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { MENU_PLACEMENT } from 'constants.js';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import useCustomLayout from 'hooks/useCustomLayout';

const VerticalHiddenMenuPage = () => {
  const title = 'Vertical Hidden Menu';
  const description = 'A vertical menu that newer shows larger pinned version and switches between mobile view and semi-hidden view.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/content', text: 'Content' },
    { to: 'interface/content/menu', text: 'Menu' },
  ];
  useCustomLayout({
    placement: MENU_PLACEMENT.Vertical,
    breakpoints: {
      verticalUnpinned: 10000,
      verticalMobile: 600,
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

export default VerticalHiddenMenuPage;
