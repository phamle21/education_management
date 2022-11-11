import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const CtaTextAndButtonsFirst = () => {
  return (
    <Card className="h-100">
      <Card.Body>
        <div className="cta-3">Ready to make bread?</div>
        <div className="mb-3 cta-3 text-primary">Start now!</div>
        <Row className="gx-2">
          <Col>
            <div className="text-muted mb-3 mb-sm-0 pe-3">Cheesecake chocolate carrot cake pie lollipop lemon toffee lollipop. Oat cake pie cake cotton.</div>
          </Col>
          <Col xs="12" sm="auto" className="d-flex align-items-center position-relative">
            <Button variant="primary" className="btn-icon btn-icon-start stretched-link">
              <CsLineIcons icon="chevron-right" /> <span>View</span>{' '}
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const CtaTextAndButtonsSecond = () => {
  return (
    <Card className="h-100 bg-gradient-light">
      <Card.Body>
        <div className="cta-3 text-white">Ready to make bread?</div>
        <div className="mb-3 cta-3 text-primary text-white">Start now!</div>
        <Row className="gx-2">
          <Col>
            <div className="text-white mb-3 mb-sm-0 pe-3">Cheesecake chocolate carrot cake pie lollipop lemon toffee lollipop. Oat cake pie cake cotton.</div>
          </Col>
          <Col xs="12" sm="auto" className="d-flex align-items-center position-relative">
            <Button variant="white" className="btn-icon btn-icon-start stretched-link">
              <CsLineIcons icon="chevron-right" /> <span>View</span>{' '}
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
