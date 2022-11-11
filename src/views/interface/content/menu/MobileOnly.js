import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { MENU_BEHAVIOUR } from 'constants.js';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import useCustomLayout from 'hooks/useCustomLayout';

const MobileOnlyMenuPage = () => {
  const title = 'Mobile Only Menu';
  const description = 'Shows only the mobile menu';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/content', text: 'Content' },
    { to: 'interface/content/menu', text: 'Menu' },
  ];
  useCustomLayout({
    behaviour: MENU_BEHAVIOUR.Pinned,
    breakpoints: {
      verticalUnpinned: 10000,
      verticalMobile: 10000,
      horizontalMobile: 10000,
    },
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

export default MobileOnlyMenuPage;
