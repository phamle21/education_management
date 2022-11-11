import React from 'react';
import { Row, Col, Card, Breadcrumb } from 'react-bootstrap';
import Scrollspy from 'components/scrollspy/Scrollspy';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const BreadcrumbPage = () => {
  const title = 'Breadcrumb';
  const description = 'Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/components', title: 'Components' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'default', text: 'Default' },
    { id: 'arrows', text: 'Arrows' },
    { id: 'backButton', text: 'Back Button' },
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
              <h1 className="mb-1 pb-0 display-4">Page Title</h1>
              <Breadcrumb>
                <Breadcrumb.Item href="#default">Home Page</Breadcrumb.Item> <Breadcrumb.Item href="#">Library</Breadcrumb.Item>{' '}
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
              </Breadcrumb>
            </Card>
          </section>
          {/* Default End */}

          {/* Arrows Start */}
          <section className="scroll-section" id="arrows">
            <h2 className="small-title">Arrows</h2>
            <Card body className="mb-5">
              <h1 className="mb-1 pb-0 display-4">Page Title</h1>

              <Breadcrumb bsPrefix="list-inline">
                <Breadcrumb.Item bsPrefix="list-inline-item" href="#" linkProps={{ className: 'muted-link' }}>
                  <span className="text-small align-middle me-2">HOME PAGE</span> <CsLineIcons icon="chevron-right" size="13" />
                </Breadcrumb.Item>{' '}
                <Breadcrumb.Item bsPrefix="list-inline-item" href="#" linkProps={{ className: 'muted-link' }}>
                  <span className="text-small align-middle me-2">LIBRARY</span> <CsLineIcons icon="chevron-right" size="13" />
                </Breadcrumb.Item>{' '}
                <Breadcrumb.Item bsPrefix="list-inline-item" active linkProps={{ className: 'muted-link' }}>
                  <a href="#arrows" className="muted-link">
                    <span className="text-small align-middle me-2">DATA</span>{' '}
                  </a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Card>
          </section>
          {/* Arrows End */}

          {/* Back Button Start */}
          <section className="scroll-section" id="backButton">
            <h2 className="small-title">Back Button</h2>
            <Card body className="mb-5">
              <div className="w-auto sw-md-30">
                <a href="#backButton" className="muted-link pb-1 d-inline-block">
                  <CsLineIcons icon="chevron-left" size="13" /> <span className="text-small align-middle">Home</span>
                </a>
                <h1 className="mb-0 pb-0 display-4">Page Title</h1>
              </div>
            </Card>
          </section>
          {/* Back Button End */}
        </Col>

        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default BreadcrumbPage;
