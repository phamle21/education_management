import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Scrollspy from 'components/scrollspy/Scrollspy';

const ImagesPage = () => {
  const title = 'Images';
  const description =
    'Examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', title: 'Interface' },
    { to: 'interface/content', title: 'Content' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'responsive', text: 'Responsive' },
    { id: 'fixedWidth', text: 'Fixed Width' },
    { id: 'fixedHeight', text: 'Fixed Height' },
    { id: 'aligning', text: 'Aligning' },
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
          {/* Responsive Start */}
          <section className="scroll-section" id="responsive">
            <h2 className="small-title">Responsive</h2>
            <Row>
              <Col xs="6">
                <Card className="mb-5">
                  <Card.Body>
                    <img src="/img/product/large/product-1.webp" className="img-fluid rounded" alt="Responsive image" />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
          {/* Responsive End */}

          {/* Fixed Width Start */}
          <section className="scroll-section" id="fixedWidth">
            <h2 className="small-title">Fixed Width</h2>
            <Card body className="mb-5">
              <img src="/img/product/small/product-2.webp" className="img-fluid rounded mb-1 me-1 sw-6" alt="Responsive image" />
              <img src="/img/product/small/product-2.webp" className="img-fluid rounded mb-1 me-1 sw-9" alt="Responsive image" />
              <img src="/img/product/small/product-2.webp" className="img-fluid rounded mb-1 me-1 sw-13" alt="Responsive image" />
              <img src="/img/product/small/product-2.webp" className="img-fluid rounded mb-1 me-1 sw-19" alt="Responsive image" />
              <img src="/img/product/small/product-2.webp" className="img-fluid rounded mb-1 me-1 sw-35" alt="Responsive image" />
            </Card>
          </section>
          {/* Fixed Width End */}

          {/* Fixed Height Start */}
          <section className="scroll-section" id="fixedHeight">
            <h2 className="small-title">Fixed Height</h2>
            <Card body className="mb-5">
              <img src="/img/product/small/product-3.webp" className="img-fluid rounded mb-1 me-1 sh-6" alt="Responsive image" />
              <img src="/img/product/small/product-3.webp" className="img-fluid rounded mb-1 me-1 sh-9" alt="Responsive image" />
              <img src="/img/product/small/product-3.webp" className="img-fluid rounded mb-1 me-1 sh-13" alt="Responsive image" />
              <img src="/img/product/small/product-3.webp" className="img-fluid rounded mb-1 me-1 sh-19" alt="Responsive image" />
              <img src="/img/product/small/product-3.webp" className="img-fluid rounded mb-1 me-1 sh-35" alt="Responsive image" />
            </Card>
          </section>
          {/* Fixed Height End */}

          {/* Aligning Start */}
          <section className="scroll-section" id="aligning">
            <h2 className="small-title">Aligning</h2>
            <Card body className="mb-5">
              <img src="/img/product/small/product-4.webp" className="rounded mb-1 me-1 float-start sw-19" alt="card image" />
              <img src="/img/product/small/product-4.webp" className="rounded mb-1 me-1 float-end sw-19" alt="card image" />
              <img src="/img/product/small/product-4.webp" className="rounded mb-1 mx-auto d-block sw-19" alt="card image" />
            </Card>
          </section>
          {/* Aligning End */}
        </Col>

        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default ImagesPage;
