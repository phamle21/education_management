import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import ScrollbarHorizontal from './ScrollbarHorizontal';
import ScrollbarHorizontalVisible from './ScrollbarHorizontalVisible';
import ScrollbarVertical from './ScrollbarVertical';
import ScrollbarVerticalVisible from './ScrollbarVerticalVisible';
import ScrollbarWebkitHorizontal from './ScrollbarWebkitHorizontal';
import ScrollbarWebkitVertical from './ScrollbarWebkitVertical';
import ScrollbarScrollByContent from './ScrollbarScrollByContent';

const Scrollbar = () => {
  const title = 'Scrollbar';
  const description =
    'A javascript scrollbar plugin which hides native scrollbars, provides custom styleable overlay scrollbars. Also, webkit scrollbar overrides.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/plugins', title: 'Plugins' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'vertical', text: 'Vertical' },
    { id: 'horizontal', text: 'Horizontal' },
    { id: 'verticalVisible', text: 'Vertical Visible' },
    { id: 'horizontalVisible', text: 'Horizontal Visible' },
    { id: 'webkitVertical', text: 'Webkit Vertical' },
    { id: 'webkitHorizontal', text: 'Webkit Horizontal' },
    { id: 'scrollByContent', text: 'Scroll by Content' },
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

          {/* Vertical Start */}
          <section className="scroll-section" id="vertical">
            <h2 className="small-title">Vertical</h2>
            <Row>
              <Col xl="6">
                <Card body className="mb-5">
                  <ScrollbarVertical />
                </Card>
              </Col>
            </Row>
          </section>
          {/* Vertical End */}

          {/* Horizontal Start */}
          <section className="scroll-section" id="horizontal">
            <h2 className="small-title">Horizontal</h2>
            <Row>
              <Col xl="6">
                <Card body className="mb-5">
                  <ScrollbarHorizontal />
                </Card>
              </Col>
            </Row>
          </section>
          {/* Horizontal End */}

          {/* Vertical Visible Start */}
          <section className="scroll-section" id="verticalVisible">
            <h2 className="small-title">Vertical Visible</h2>
            <Row>
              <Col xl="6">
                <Card body className="mb-5">
                  <ScrollbarVerticalVisible />
                </Card>
              </Col>
            </Row>
          </section>
          {/* Vertical Visible End */}

          {/* Horizontal Visible Start */}
          <section className="scroll-section" id="horizontalVisible">
            <h2 className="small-title">Horizontal Visible</h2>
            <Row>
              <Col xl="6">
                <Card body className="mb-5">
                  <ScrollbarHorizontalVisible />
                </Card>
              </Col>
            </Row>
          </section>
          {/* Horizontal Visible End */}

          {/* Webkit Vertical Start */}
          <section className="scroll-section" id="webkitVertical">
            <h2 className="small-title">Webkit Vertical</h2>
            <Row>
              <Col xl="6">
                <Card body className="mb-5">
                  <ScrollbarWebkitVertical />
                </Card>
              </Col>
            </Row>
          </section>
          {/* Webkit Vertical End */}

          {/* Webkit Horizontal Start */}
          <section className="scroll-section" id="webkitHorizontal">
            <h2 className="small-title">Webkit Horizontal</h2>
            <Row>
              <Col xl="6">
                <Card body className="mb-5">
                  <ScrollbarWebkitHorizontal />
                </Card>
              </Col>
            </Row>
          </section>
          {/* Webkit Horizontal End */}

          {/* Scroll by Content Start */}
          <section className="scroll-section" id="scrollByContent">
            <h2 className="small-title">Scroll by Content</h2>
            <ScrollbarScrollByContent />
          </section>
          {/* Scroll by Content End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Scrollbar;
