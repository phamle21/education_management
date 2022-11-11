import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import Scrollspy from 'components/scrollspy/Scrollspy';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import BoxedVariationsScrollbar from './BoxedVariationsScrollbar';
import BoxedVariationsPagination from './BoxedVariationsPagination';
import BoxedVariationsHover from './BoxedVariationsHover';
import BoxedVariationsStripe from './BoxedVariationsStripe';

const BoxedVariations = () => {
  const title = 'Boxed Variations';
  const description = 'React Table responsive boxed variations with search.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/plugins', title: 'Plugins' },
    { to: 'interface/plugins/datatables', title: 'Datatables' },
  ];
  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'scrollbar', text: 'Scrollbar' },
    { id: 'pagination', text: 'Pagination' },
    { id: 'hover', text: 'Hover' },
    { id: 'stripe', text: 'Stripe' },
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

          {/* Scrollbar Start */}
          <section className="scroll-section" id="scrollbar">
            <h2 className="small-title">Scrollbar</h2>
            <Card className="mb-5">
              <Card.Body className="scroll-out">
                <OverlayScrollbarsComponent options={{ overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="scroll-track-visible sh-45">
                  <BoxedVariationsScrollbar />
                </OverlayScrollbarsComponent>
              </Card.Body>
            </Card>
          </section>
          {/* Scrollbar End */}

          {/* Pagination Start */}
          <section className="scroll-section" id="pagination">
            <h2 className="small-title">Pagination</h2>
            <Card body className="mb-5">
              <BoxedVariationsPagination />
            </Card>
          </section>
          {/* Pagination End */}

          {/* Hover Start */}
          <section className="scroll-section" id="hover">
            <h2 className="small-title">Hover</h2>
            <Card body className="mb-5">
              <BoxedVariationsHover />
            </Card>
          </section>
          {/* Hover End */}

          {/* Stripe Start */}
          <section className="scroll-section" id="stripe">
            <h2 className="small-title">Stripe</h2>
            <Card body className="mb-5">
              <BoxedVariationsStripe />
            </Card>
          </section>
          {/* Stripe End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default BoxedVariations;
