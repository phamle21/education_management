import React from 'react';
import { Card, Col, Row, Badge } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const StatsPercentages = () => {
  return (
    <div>
      <Row className="g-2">
        <Col lg="6" xxl="3">
          <Card>
            <Card.Body>
              <Row className="g-0 align-items-center">
                <Col xs="auto">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-md d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="loaf" className="text-white" />
                  </div>
                </Col>
                <Col className="sh-6 ps-3 d-flex flex-column justify-content-center">
                  <div className="heading mb-0 d-flex align-items-center lh-1-25">Orders</div>
                  <Row className="g-0">
                    <Col xs="auto">
                      <div className="cta-2 text-primary">34</div>
                    </Col>
                    <Col className="text-success d-flex align-items-center ps-3">
                      <CsLineIcons icon="arrow-top" className="text-success me-1" width="13" height="13" />
                      <span className="text-medium">+18.4%</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6" xxl="3">
          <Card>
            <Card.Body>
              <Row className="g-0 align-items-center">
                <Col xs="auto">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-md d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="loaf" className="text-white" />
                  </div>
                </Col>
                <Col className="sh-6 ps-3 d-flex flex-column justify-content-center">
                  <div className="heading mb-0 d-flex align-items-center lh-1-25">Views</div>
                  <Row className="g-0">
                    <Col xs="auto">
                      <div className="cta-2 text-primary">12%</div>
                    </Col>
                    <Col className="text-danger d-flex align-items-center ps-3">
                      <CsLineIcons icon="arrow-bottom" className="text-danger me-1" width="13" height="13" />
                      <span className="text-medium">-12.1%</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6" xxl="3">
          <Card>
            <Card.Body>
              <Row className="g-0 align-items-center">
                <Col xs="auto">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-md d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="loaf" className="text-white" />
                  </div>
                </Col>
                <Col className="sh-6 ps-3 d-flex flex-column justify-content-center">
                  <div className="heading mb-0 d-flex align-items-center lh-1-25">Views</div>
                  <Row className="g-0">
                    <Col xs="auto">
                      <div className="cta-2 text-primary">66</div>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end">
                      <Badge bg="primary">+18.4%</Badge>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6" xxl="3">
          <Card>
            <Card.Body>
              <Row className="g-0 align-items-center">
                <Col xs="auto">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-md d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="loaf" className="text-white" />
                  </div>
                </Col>
                <Col className="sh-6 ps-3 d-flex flex-column justify-content-center">
                  <div className="heading mb-0 d-flex align-items-center lh-1-25">Views</div>
                  <Row className="g-0">
                    <Col xs="auto">
                      <div className="cta-2 text-primary">284</div>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end">
                      <Badge bg="secondary">+11.4%</Badge>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default StatsPercentages;
