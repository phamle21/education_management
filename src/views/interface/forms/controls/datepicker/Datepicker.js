import React from 'react';
import { Card, Col, Row, Form } from 'react-bootstrap';
import Scrollspy from 'components/scrollspy/Scrollspy';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import DatepickerBasic from './DatepickerBasic';
import DatepickerPlaceholder from './DatepickerPlaceholder';

import {
  DatepickerBottomStart,
  DatepickerBottomEnd,
  DatepickerBottomCenter,
  DatepickerTopStart,
  DatepickerTopEnd,
  DatepickerTopCenter,
} from './DatepickerPositions';
import DatepickerInitialValue from './DatepickerInitialValue';
import DatepickerFormat from './DatepickerFormat';
import DatepickerLocale from './DatepickerLocale';
import { DatepickerRangeMultiple, DatepickerRangeSingle } from './DatepickerRange';
import DatepickerInline from './DatepickerInline';
import DatepickerFilter from './DatepickerFilter';
import DatepickerYear from './DatepickerYear';
import DatepickerMonth from './DatepickerMonth';
import DatepickerWithTime from './DatepickerWithTime';
import DatepickerTime from './DatepickerTime';
import DatepickerFloatingLabel from './DatepickerFloatingLabel';

const Datepicker = () => {
  const title = 'Datepicker';
  const description = 'A simple and reusable datepicker component for React.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/forms', title: 'Forms' },
    { to: 'interface/forms/controls', title: 'Controls' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basic', text: 'Basic' },
    { id: 'placeholder', text: 'Placeholder' },
    { id: 'initialValue', text: 'Initial Value' },
    { id: 'format', text: 'Format' },
    { id: 'locale', text: 'Locale' },
    { id: 'range', text: 'Range' },
    { id: 'inline', text: 'Inline' },
    { id: 'filterDates', text: 'Filter Dates' },
    { id: 'positions', text: 'Positions' },
    { id: 'pickers', text: 'Pickers' },
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
                  <Form.Label className="d-block">Date</Form.Label>
                  <DatepickerBasic />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Basic End */}

          {/* Placeholder Start */}
          <section className="scroll-section" id="placeholder">
            <h2 className="small-title">Placeholder</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Date</Form.Label>
                  <DatepickerPlaceholder />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Placeholder End */}

          {/* Initial Value Start */}
          <section className="scroll-section" id="initialValue">
            <h2 className="small-title">Initial Value</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Date</Form.Label>
                  <DatepickerInitialValue />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Initial Value End */}

          {/* Format Start */}
          <section className="scroll-section" id="format">
            <h2 className="small-title">Format</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Date</Form.Label>
                  <DatepickerFormat />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Format End */}

          {/* Locale Start */}
          <section className="scroll-section" id="locale">
            <h2 className="small-title">Locale</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Date</Form.Label>
                  <DatepickerLocale />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Locale End */}

          {/* Range Start */}
          <section className="scroll-section" id="range">
            <h2 className="small-title">Range</h2>
            <Card body className="mb-5">
              <Row className="mb-3">
                <Col>
                  <Form.Label className="d-block">Multiple</Form.Label>
                  <DatepickerRangeMultiple />
                </Col>
              </Row>
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Single</Form.Label>
                  <DatepickerRangeSingle />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Range End */}

          {/* Inline Start */}
          <section className="scroll-section" id="inline">
            <h2 className="small-title">Inline</h2>
            <Row>
              <Col xs="auto">
                <Card className="mb-5">
                  <Card.Body className="inline-datepicker-container">
                    <DatepickerInline />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
          {/* Inline End */}

          {/* Filter Dates Start */}
          <section className="scroll-section" id="filterDates">
            <h2 className="small-title">Filter Dates</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Date</Form.Label>
                  <DatepickerFilter />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Filter Dates End */}

          {/* Positions Start */}
          <section className="scroll-section" id="positions">
            <h2 className="small-title">Positions</h2>
            <Card body className="mb-5">
              <Row className="mb-n3">
                <Col sm="6" xl="4" className="mb-3">
                  <Form.Label className="d-block">Bottom Start</Form.Label>
                  <DatepickerBottomStart />
                </Col>
                <Col sm="6" xl="4" className="mb-3">
                  <Form.Label className="d-block">Bottom End</Form.Label>
                  <DatepickerBottomEnd />
                </Col>
                <Col sm="6" xl="4" className="mb-3">
                  <Form.Label className="d-block">Bottom Center</Form.Label>
                  <DatepickerBottomCenter />
                </Col>
                <Col sm="6" xl="4" className="mb-3">
                  <Form.Label className="d-block">Top Start</Form.Label>
                  <DatepickerTopStart />
                </Col>
                <Col sm="6" xl="4" className="mb-3">
                  <Form.Label className="d-block">Top End</Form.Label>
                  <DatepickerTopEnd />
                </Col>
                <Col sm="6" xl="4" className="mb-3">
                  <Form.Label className="d-block">Top Center</Form.Label>
                  <DatepickerTopCenter />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Positions End */}

          {/* Pickers Start */}
          <section className="scroll-section" id="pickers">
            <h2 className="small-title">Pickers</h2>
            <Card body className="mb-5">
              <Row className="mb-n3">
                <Col sm="6" xl="4" className="mb-3">
                  <Form.Label className="d-block">With Time</Form.Label>
                  <DatepickerWithTime />
                </Col>
                <Col sm="6" xl="4" className="mb-3">
                  <Form.Label className="d-block">Year Only</Form.Label>
                  <DatepickerYear />
                </Col>
                <Col sm="6" xl="4" className="mb-3">
                  <Form.Label className="d-block">Month Only</Form.Label>
                  <DatepickerMonth />
                </Col>
                <Col sm="6" xl="4" className="mb-3">
                  <Form.Label className="d-block">Time Only</Form.Label>
                  <DatepickerTime />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Pickers End */}

          {/* Top Label Start */}
          <section className="scroll-section" id="topLabel">
            <h2 className="small-title">Top Label</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <div className="top-label">
                    <DatepickerBasic />
                    <span>DATE</span>
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
                  <div className="filled">
                    <CsLineIcons icon="calendar" />
                    <DatepickerPlaceholder />
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
                  <DatepickerFloatingLabel label="Date" />
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

export default Datepicker;
