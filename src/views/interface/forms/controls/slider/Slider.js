import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';

import CsLineIcons from 'cs-line-icons/CsLineIcons';
import SliderBasic from './SliderBasic';
import SliderVertical from './SliderVertical';
import { SliderTooltipHorizontal, SliderTooltipVertical } from './SliderTooltip';
import SliderRange from './SliderRange';
import SliderSteps from './SliderSteps';

const Slider = () => {
  const title = 'Slider';
  const description = 'Slider UI component for React';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/forms', title: 'Forms' },
    { to: 'interface/forms/controls', title: 'Controls' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basic', text: 'Basic' },
    { id: 'vertical', text: 'Vertical' },
    { id: 'tooltip', text: 'Tooltip' },
    { id: 'range', text: 'Range' },
    { id: 'steps', text: 'Steps' },
    { id: 'topLabel', text: 'Top Label' },
    { id: 'filled', text: 'Filled' },
    { id: 'floatingLabel', text: 'Floating Label' },
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
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Slider</Form.Label>
                  <SliderBasic />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Basic End */}

          {/* Vertical Start */}
          <section className="scroll-section" id="vertical">
            <h2 className="small-title">Vertical</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Slider</Form.Label>
                  <div className="sh-15">
                    <SliderVertical />
                  </div>
                </Col>
              </Row>
            </Card>
          </section>
          {/* Vertical End */}

          {/* Tooltip Start */}
          <section className="scroll-section" id="tooltip">
            <h2 className="small-title">Tooltip</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Slider</Form.Label>
                  <SliderTooltipHorizontal />
                </Col>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Slider</Form.Label>
                  <div className="sh-15">
                    <SliderTooltipVertical />
                  </div>
                </Col>
              </Row>
            </Card>
          </section>
          {/* Tooltip End */}

          {/* Range Start */}
          <section className="scroll-section" id="range">
            <h2 className="small-title">Range</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Slider</Form.Label>
                  <SliderRange />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Range End */}

          {/* Steps Start */}
          <section className="scroll-section" id="steps">
            <h2 className="small-title">Steps</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Slider</Form.Label>
                  <SliderSteps />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Steps End */}

          {/* Top Label Start */}
          <section className="scroll-section" id="topLabel">
            <h2 className="small-title">Top Label</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <div className="top-label custom-control-container slider-container fix-left-spacing">
                    <SliderBasic />
                    <span>RATING</span>
                  </div>
                </Col>
              </Row>
            </Card>
          </section>
          {/* Top Label End */}

          {/* Filled Start */}
          <section className="scroll-section" id="filled">
            <h2 className="small-title">Filled</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <div className="filled custom-control-container slider-container fix-left-spacing">
                    <CsLineIcons icon="badge" />
                    <SliderBasic />
                  </div>
                </Col>
              </Row>
            </Card>
          </section>
          {/* Filled End */}

          {/* Floating Label Start */}
          <section className="scroll-section" id="floatingLabel">
            <h2 className="small-title">Floating Label</h2>
            <Card body>
              <Row>
                <Col xs="12" lg="6">
                  <div className="form-floating slider-container custom-control-container fix-left-spacing">
                    <SliderBasic />
                    <label>Rating</label>
                  </div>
                </Col>
              </Row>
            </Card>
          </section>
          {/* Floating Label End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Slider;
