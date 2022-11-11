import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import SortableAnimation from './SortableAnimation';
import SortableBasic from './SortableBasic';
import SortableColumns from './SortableColumns';
import { SortableMovingFirst, SortableMovingSecond } from './SortableMoving';
import SortableStore from './SortableStore';

const Sortable = () => {
  const title = 'Sortable';
  const description = 'Sortable is a JavaScript library for reorderable drag-and-drop lists.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/plugins', title: 'Plugins' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basic', text: 'Basic' },
    { id: 'animation', text: 'Animation' },
    { id: 'columns', text: 'Columns' },
    { id: 'moving', text: 'Moving' },
    { id: 'store', text: 'Store' },
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

          {/* Basic Start */}
          <section className="scroll-section" id="basic">
            <h2 className="small-title">Basic</h2>
            <Card body className="mb-5">
              <SortableBasic />
            </Card>
          </section>
          {/* Basic End */}

          {/* Animation Start */}
          <section className="scroll-section" id="animation">
            <h2 className="small-title">Animation</h2>
            <Card body className="mb-5">
              <SortableAnimation />
            </Card>
          </section>
          {/* Animation End */}

          {/* Columns Start */}
          <section className="scroll-section" id="columns">
            <h2 className="small-title">Columns</h2>
            <div className="mb-5">
              <SortableColumns />
            </div>
          </section>
          {/* Columns End */}

          {/* Moving Start */}
          <section className="scroll-section" id="moving">
            <h2 className="small-title">Moving</h2>
            <Row>
              <Col>
                <Card body className="mb-5">
                  <SortableMovingFirst />
                </Card>
              </Col>
              <Col>
                <Card body className="mb-5">
                  <SortableMovingSecond />
                </Card>
              </Col>
            </Row>
          </section>
          {/* Moving End */}

          {/* Store Start */}
          <section className="scroll-section" id="store">
            <h2 className="small-title">Store</h2>
            <Card body>
              <SortableStore />
            </Card>
          </section>
          {/* Store End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Sortable;
