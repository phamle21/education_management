import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import { RatingBasicInteractive, RatingBasicReadonly } from './RatingBasic';
import { RatingButtonsInteractive, RatingButtonsReadonly } from './RatingButtons';
import { RatingTenPointsInteractive, RatingTenPointsReadonly } from './RatingTenPoints';

const Rating = () => {
  const title = 'Rating';
  const description = 'A rating react component with custom symbols.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/forms', title: 'Forms' },
    { to: 'interface/forms/controls', title: 'Controls' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'basic', text: 'Basic' },
    { id: 'tenPoints', text: 'Ten Points' },
    { id: 'buttons', text: 'Buttons' },
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
                  <Form.Label className="d-block">Interactive</Form.Label>
                  <RatingBasicInteractive />
                </Col>
                <Col>
                  <Form.Label className="d-block">Readonly</Form.Label>
                  <RatingBasicReadonly />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Basic End */}

          {/* Ten Points Start */}
          <section className="scroll-section" id="tenPoints">
            <h2 className="small-title">Ten Points</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Interactive</Form.Label>
                  <RatingTenPointsInteractive />
                </Col>
                <Col>
                  <Form.Label className="d-block">Readonly</Form.Label>
                  <RatingTenPointsReadonly />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Ten Points End */}

          {/* Buttons Start */}
          <section className="scroll-section" id="buttons">
            <h2 className="small-title">Buttons</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <Form.Label className="d-block">Interactive</Form.Label>
                  <RatingButtonsInteractive />
                </Col>
                <Col>
                  <Form.Label className="d-block">Readonly</Form.Label>
                  <RatingButtonsReadonly />
                </Col>
              </Row>
            </Card>
          </section>
          {/* Buttons End */}

          {/* Top Label Start */}
          <section className="scroll-section" id="topLabel">
            <h2 className="small-title">Top Label</h2>
            <Card body className="mb-5">
              <Row>
                <Col xs="12" lg="6">
                  <div className="top-label custom-control-container rating-container mb-0">
                    <RatingBasicInteractive />
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
                  <div className="filled custom-control-container rating-container d-flex align-items-center mb-0">
                    <CsLineIcons icon="badge" />
                    <RatingBasicInteractive />
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
                  <div className="rating-container form-floating">
                    <RatingBasicInteractive />
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

export default Rating;
