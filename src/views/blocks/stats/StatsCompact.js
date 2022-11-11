import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const StatsCompact = () => {
  return (
    <>
      <Row className="g-2">
        <Col xl="6" className="mb-2">
          <Card>
            <Card.Body>
              <Row className="g-0">
                <Col xs="3" className="text-center">
                  <div className="text-small text-muted mb-1">SALES</div>
                  <div className="cta-2 text-primary">235</div>
                </Col>
                <Col xs="3" className="text-center">
                  <div className="text-small text-muted mb-1">ORDERS</div>
                  <div className="cta-2 text-primary">421</div>
                </Col>
                <Col xs="3" className="text-center">
                  <div className="text-small text-muted mb-1">VIEWS</div>
                  <div className="cta-2 text-primary">752</div>
                </Col>
                <Col xs="3" className="text-center">
                  <div className="text-small text-muted mb-1">REFUNDS</div>
                  <div className="cta-2 text-primary">53</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="g-2">
        <Col xl="6">
          <Card>
            <Card.Body>
              <Row className="g-0 mb-n5 mb-sm-0">
                <Col xs="6" sm="3" className="text-center d-flex justify-content-center align-items-center flex-column mb-4 mb-sm-0">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center mb-3">
                    <CsLineIcons icon="box" className="text-white" />
                  </div>
                  <div className="text-small text-muted mb-1">SALES</div>
                  <div className="cta-2 text-primary">235</div>
                </Col>
                <Col xs="6" sm="3" className="text-center d-flex justify-content-center align-items-center flex-column mb-4 mb-sm-0">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center mb-3">
                    <CsLineIcons icon="shipping" className="text-white" />
                  </div>
                  <div className="text-small text-muted mb-1">ORDERS</div>
                  <div className="cta-2 text-primary">421</div>
                </Col>
                <Col xs="6" sm="3" className="text-center d-flex justify-content-center align-items-center flex-column mb-4 mb-sm-0">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center mb-3">
                    <CsLineIcons icon="screen" className="text-white" />
                  </div>
                  <div className="text-small text-muted mb-1">VIEWS</div>
                  <div className="cta-2 text-primary">752</div>
                </Col>
                <Col xs="6" sm="3" className="text-center d-flex justify-content-center align-items-center flex-column mb-4 mb-sm-0">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center mb-3">
                    <CsLineIcons icon="arrow-bottom-left" className="text-white" />
                  </div>
                  <div className="text-small text-muted mb-1">REFUNDS</div>
                  <div className="cta-2 text-primary">53</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default StatsCompact;
