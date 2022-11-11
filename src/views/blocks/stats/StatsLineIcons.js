import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const StatsLineIcons = () => {
  return (
    <Row className="g-2 mb-5">
      <Col lg="4" xxl="2">
        <Card>
          <Card.Body>
            <div className="heading d-flex justify-content-between lh-1-25 mb-3">
              <span>Orders</span>
              <CsLineIcons icon="box" className="text-primary" />
            </div>
            <div className="text-small text-muted mb-1">THIS MONTH</div>
            <div className="cta-1 text-primary">1.325</div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg="4" xxl="2">
        <Card>
          <Card.Body>
            <div className="heading d-flex justify-content-between lh-1-25 mb-3">
              <span>Orders</span>
              <CsLineIcons icon="trend-up" className="text-primary" />
            </div>
            <div className="text-small text-muted mb-1">THIS MONTH</div>
            <div className="cta-1 text-primary">25.321</div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default StatsLineIcons;
