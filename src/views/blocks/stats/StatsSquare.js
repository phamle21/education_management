import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const StatsSquare = () => {
  return (
    <Row className="g-2">
      <Col xs="auto">
        <Card className="hover-border-primary sh-20 sw-20">
          <Card.Body className="h-100 d-flex flex-column justify-content-between align-items-center">
            <div className="bg-gradient-light sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center">
              <CsLineIcons icon="loaf" className="text-white" />
            </div>
            <div className="heading text-center mb-0 sh-4 d-flex align-items-center lh-1">Corn</div>
            <div className="text-small text-primary">14 PRODUCTS</div>
          </Card.Body>
        </Card>
      </Col>
      <Col xs="auto">
        <Card className="sh-20 sw-20 active">
          <Card.Body className="h-100 d-flex flex-column justify-content-between align-items-center">
            <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary">
              <CsLineIcons icon="loaf" className="text-primary" />
            </div>
            <div className="heading text-center mb-0 sh-4 d-flex align-items-center lh-1">Corn</div>
            <div className="text-small text-primary">14 PRODUCTS</div>
          </Card.Body>
        </Card>
      </Col>
      <Col xs="auto">
        <Card className="sh-20 sw-20 bg-gradient-light">
          <Card.Body className="h-100 d-flex flex-column justify-content-between align-items-center">
            <div className="border border-foreground sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center">
              <CsLineIcons icon="loaf" className="text-white" />
            </div>
            <div className="heading text-center mb-0 sh-4 d-flex align-items-center lh-1 text-white">Corn</div>
            <div className="text-small text-white">14 PRODUCTS</div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default StatsSquare;
