import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const StatsHorizontal = () => {
  return (
    <Row className="g-2">
      <Col xl="4">
        <Card className="hover-border-primary">
          <Card.Body className="py-4">
            <Row className="g-0 align-items-center">
              <Col xs="auto">
                <div className="bg-gradient-light sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center">
                  <CsLineIcons icon="loaf" className="text-white" />
                </div>
              </Col>
              <Col>
                <div className="heading mb-0 sh-8 d-flex align-items-center lh-1-25 ps-3">Completed Orders</div>
              </Col>
              <Col xs="auto" className="ps-3">
                <div className="display-5 text-primary">34</div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col xl="4">
        <Card className="active">
          <Card.Body className="py-4">
            <Row className="g-0 align-items-center">
              <Col xs="auto">
                <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary">
                  <CsLineIcons icon="loaf" className="text-primary" />
                </div>
              </Col>
              <Col>
                <div className="heading mb-0 sh-8 d-flex align-items-center lh-1-25 ps-3">Completed Orders</div>
              </Col>
              <Col xs="auto" className="ps-3">
                <div className="display-5 text-primary">34</div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col xl="4">
        <Card className="bg-gradient-light">
          <Card.Body className="py-4">
            <Row className="g-0 align-items-center">
              <Col xs="auto">
                <div className="border border-foreground sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center">
                  <CsLineIcons icon="loaf" className="text-white" />
                </div>
              </Col>
              <Col>
                <div className="heading mb-0 sh-8 d-flex align-items-center lh-1-25 ps-3 text-white">Completed Orders</div>
              </Col>
              <Col xs="auto" className="ps-3">
                <div className="display-5 text-white">34</div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default StatsHorizontal;
