import React from 'react';
import { Row, Col, Card, CloseButton } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Scrollspy from 'components/scrollspy/Scrollspy';

const CloseButtonPage = () => {
  const title = 'Close Button';
  const description = 'A generic close button for dismissing content like modals and alerts.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/components', title: 'Components' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'default', text: 'Default' },
    { id: 'colors', text: 'Colors' },
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
              <CloseButton />
            </Card>
          </section>
          {/* Default End */}

          {/* Colors Start */}
          <section className="scroll-section" id="colors">
            <h2 className="small-title">Colors</h2>
            <Card body className="mb-5">
              <CloseButton className="text-primary" /> <CloseButton className="text-secondary" /> <CloseButton className="text-tertiary" />{' '}
              <CloseButton className="text-quaternary" /> <CloseButton className="text-body" /> <CloseButton className="text-alternate" />{' '}
              <CloseButton className="text-muted" /> <CloseButton className="text-separator" />
            </Card>
          </section>
          {/* Colors End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default CloseButtonPage;
