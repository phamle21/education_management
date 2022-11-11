import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import { ProgressBasicPrimary, ProgressBasicQuaternary, ProgressBasicSecondary, ProgressBasicTertiary } from './ProgressBasic';
import { ProgressContentPrimary, ProgressContentQuaternary, ProgressContentSecondary, ProgressContentTertiary } from './ProgressContent';
import { ProgressMultiplePrimary, ProgressMultipleQuaternary, ProgressMultipleSecondary, ProgressMultipleTertiary } from './ProgressMultiplePaths';
import { ProgressSpeedometerPrimary, ProgressSpeedometerQuaternary, ProgressSpeedometerSecondary, ProgressSpeedometerTertiary } from './ProgressSpeedometer';

const Progress = () => {
  const title = 'Progressbar';
  const description = 'A circular progressbar component, built with SVG and extensively customizable.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/plugins', title: 'Plugins' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basic', text: 'Basic' },
    { id: 'speedometer', text: 'Speedometer' },
    { id: 'content', text: 'Content' },
    { id: 'multiplePaths', text: 'Multiple Paths' },
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
              <Row className="g-4">
                <Col>
                  <p>Primary</p>
                  <ProgressBasicPrimary />
                </Col>
                <Col>
                  <p>Secondary</p>
                  <ProgressBasicSecondary />
                </Col>
                <Col>
                  <p>Tertiary</p>
                  <ProgressBasicTertiary />
                </Col>
                <Col>
                  <p>Quaternary</p>
                  <ProgressBasicQuaternary />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Basic End */}

          {/* Speedometer Start */}
          <section className="scroll-section" id="speedometer">
            <h2 className="small-title">Speedometer</h2>
            <Card body className="mb-5">
              <Row className="g-4">
                <Col>
                  <p>Primary</p>
                  <ProgressSpeedometerPrimary />
                </Col>
                <Col>
                  <p>Secondary</p>
                  <ProgressSpeedometerSecondary />
                </Col>
                <Col>
                  <p>Tertiary</p>
                  <ProgressSpeedometerTertiary />
                </Col>
                <Col>
                  <p>Quaternary</p>
                  <ProgressSpeedometerQuaternary />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Speedometer End */}

          {/* Content Start */}
          <section className="scroll-section" id="content">
            <h2 className="small-title">Content</h2>
            <Card body className="mb-5">
              <Row className="g-4">
                <Col>
                  <p>Primary</p>
                  <ProgressContentPrimary />
                </Col>
                <Col>
                  <p>Secondary</p>
                  <ProgressContentSecondary />
                </Col>
                <Col>
                  <p>Tertiary</p>
                  <ProgressContentTertiary />
                </Col>
                <Col>
                  <p>Quaternary</p>
                  <ProgressContentQuaternary />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Content End */}

          {/* Multiple Paths Start */}
          <section className="scroll-section" id="multiplePaths">
            <h2 className="small-title">Multiple Paths</h2>
            <Card body className="mb-5">
              <Row className="g-4">
                <Col>
                  <p>Primary</p>
                  <ProgressMultiplePrimary />
                </Col>
                <Col>
                  <p>Secondary</p>
                  <ProgressMultipleSecondary />
                </Col>
                <Col>
                  <p>Tertiary</p>
                  <ProgressMultipleTertiary />
                </Col>
                <Col>
                  <p>Quaternary</p>
                  <ProgressMultipleQuaternary />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Multiple Paths End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Progress;
