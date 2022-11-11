import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const StatsVertical = () => {
  return (
    <Row className="g-2">
      <Col xs="auto">
        <Card className="hover-border-primary sw-19 sh-30">
          <Card.Body className="h-100 d-flex flex-column justify-content-between align-items-center">
            <div className="bg-gradient-light sw-8 sh-8 rounded-xl d-flex justify-content-center align-items-center">
              <CsLineIcons icon="loaf" className="text-white" />
            </div>
            <div className="heading text-center mb-0 sh-8 d-flex align-items-center lh-1-25">Completed Orders</div>
            <div className="display-5 text-primary">25</div>
          </Card.Body>
        </Card>
      </Col>
      <Col xs="auto">
        <Card className="sw-19 sh-30 active">
          <Card.Body className="h-100 d-flex flex-column justify-content-between align-items-center">
            <div className="sw-8 sh-8 rounded-xl d-flex justify-content-center align-items-center border border-primary">
              <CsLineIcons icon="loaf" className="text-primary" />
            </div>
            <div className="heading text-center mb-0 sh-8 d-flex align-items-center lh-1-25">Completed Orders</div>
            <div className="display-5 text-primary">25</div>
          </Card.Body>
        </Card>
      </Col>
      <Col xs="auto">
        <Card className="sw-19 sh-30 bg-gradient-light">
          <Card.Body className="h-100 d-flex flex-column justify-content-between align-items-center">
            <div className="border border-foreground sw-8 sh-8 rounded-xl d-flex justify-content-center align-items-center">
              <CsLineIcons icon="loaf" className="text-white" />
            </div>
            <div className="heading text-center mb-0 sh-8 d-flex align-items-center lh-1-25 text-white">Completed Orders</div>
            <div className="display-5 text-white">25</div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default StatsVertical;
