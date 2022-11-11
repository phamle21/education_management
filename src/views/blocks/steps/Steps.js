import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Scrollspy from 'components/scrollspy/Scrollspy';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import { StepsDotsDate, StepsDotsIcon } from './StepsDots';
import { StepsIcon, StepsText } from './StepsIconText';
import { StepsBoxedDots, StepsBoxedIcons } from './StepsBoxed';
import { StepsTwoColumns } from './StepsTwoColumns';

const Steps = () => {
  const title = 'Steps';
  const description = 'Interface elements for timelines and steps.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'blocks', text: 'Blocks' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'dots', text: 'Dots' },
    { id: 'iconAndText', text: 'Icon & Text' },
    { id: 'boxed', text: 'Boxed' },
    { id: 'twoColumns', text: 'Two Columns' },
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

          {/* Dots Start */}
          <section className="scroll-section" id="dots">
            <h2 className="small-title">Dots</h2>
            <Row>
              <Col lg="6" className="mb-5">
                <StepsDotsIcon />
              </Col>
              <Col lg="6" className="mb-5">
                <StepsDotsDate />
              </Col>
            </Row>
          </section>
          {/* Dots End */}

          {/* Icon & Text Start */}
          <section className="scroll-section" id="iconAndText">
            <h2 className="small-title">Icon & Text</h2>
            <Row>
              <Col lg="6" className="mb-5">
                <StepsIcon />
              </Col>
              <Col lg="6" className="mb-5">
                <StepsText />
              </Col>
            </Row>
          </section>
          {/* Icon & Text End */}

          {/* Boxed Start */}
          <section className="scroll-section" id="boxed">
            <h2 className="small-title">Boxed</h2>
            <Row>
              <Col lg="6" className="mb-5">
                <StepsBoxedIcons />
              </Col>
              <Col lg="6" className="mb-5">
                <StepsBoxedDots />
              </Col>
            </Row>
          </section>
          {/* Boxed End */}

          {/* Two Columns Start */}
          <section className="scroll-section" id="twoColumns">
            <h2 className="small-title">Two Columns</h2>
            <StepsTwoColumns />
          </section>
          {/* Two Columns End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Steps;
