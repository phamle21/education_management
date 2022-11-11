import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { MENU_PLACEMENT } from 'constants.js';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import useCustomLayout from 'hooks/useCustomLayout';

const VerticalMenuPage = () => {
  const title = 'Vertical Menu';
  const description =
    'Standard vertical menu that can be pinned for larger screens, switches to semi-hidden state for tablet sizes and shows mobile menu for smaller screens.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/content', text: 'Content' },
    { to: 'interface/content/menu', text: 'Menu' },
  ];
  useCustomLayout({ placement: MENU_PLACEMENT.Vertical });

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

export default VerticalMenuPage;
