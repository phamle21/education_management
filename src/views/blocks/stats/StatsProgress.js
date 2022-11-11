import React from 'react';
import { Card, Col, Row, ProgressBar } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const StatsProgress = () => {
  return (
    <Row className="g-2">
      <Col xs="auto">
        <Card className="sw-19 sh-25">
          <Card.Body>
            <div className="h-100 d-flex flex-column justify-content-between align-items-center">
              <div className="sw-7 sh-7 d-flex justify-content-center align-items-center position-relative">
                <CircularProgressbar value={75} strokeWidth={3} text="" className="w-100 h-100 primary text-small" />
                <div className="position-absolute absolute-center text-alternate text-small ">75%</div>
              </div>
              <div className="heading text-center mb-0 sh-8 d-flex align-items-center lh-1-25">Completed Orders</div>
              <div className="text-small text-muted">THIS MONTH</div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xs="12" lg="8" xxl="6">
        <Card>
          <Card.Body>
            <div className="heading mb-0 sh-4 lh-1-25">Completed Orders</div>
            <div className="text-small text-muted mb-2">THIS MONTH</div>
            <div className="cta-3 text-primary sh-3 mb-2">75%</div>
            <ProgressBar now={75} className="progress-xs" />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default StatsProgress;
