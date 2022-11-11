import React from 'react';
import { Card, Col, Row, ProgressBar } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const StatsProgressList = () => {
  return (
    <Row>
      <Col xs="12" md="6" xxl="4">
        <Card>
          <Card.Body>
            <Row className="g-0 align-items-center mb-2 sh-6">
              <Col xs="auto">
                <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center">
                  <CsLineIcons icon="loaf" className="text-white" />
                </div>
              </Col>
              <Col className="ps-3">
                <Row className="g-0">
                  <Col>
                    <div className="sh-3 d-flex align-items-center lh-1-25">Ingredients</div>
                  </Col>
                  <Col xs="auto">
                    <div className="cta-3 text-primary sh-3 d-flex align-items-center">30%</div>
                  </Col>
                </Row>
                <ProgressBar now={30} className="progress-xs" />
              </Col>
            </Row>
            <Row className="g-0 align-items-center mb-2 sh-6">
              <Col xs="auto">
                <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center">
                  <CsLineIcons icon="user" className="text-white" />
                </div>
              </Col>
              <Col className="ps-3">
                <Row className="g-0">
                  <Col>
                    <div className="sh-3 d-flex align-items-center lh-1-25">Workers</div>
                  </Col>
                  <Col xs="auto">
                    <div className="cta-3 text-primary sh-3 d-flex align-items-center">20%</div>
                  </Col>
                </Row>
                <ProgressBar now={20} className="progress-xs" />
              </Col>
            </Row>
            <Row className="g-0 align-items-center mb-2 sh-6">
              <Col xs="auto">
                <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center">
                  <CsLineIcons icon="building" className="text-white" />
                </div>
              </Col>
              <Col className="ps-3">
                <Row className="g-0">
                  <Col>
                    <div className="sh-3 d-flex align-items-center lh-1-25">Rent</div>
                  </Col>
                  <Col xs="auto">
                    <div className="cta-3 text-primary sh-3 d-flex align-items-center">15%</div>
                  </Col>
                </Row>
                <ProgressBar now={15} className="progress-xs" />
              </Col>
            </Row>
            <Row className="g-0 align-items-center mb-2 sh-6">
              <Col xs="auto">
                <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center">
                  <CsLineIcons icon="electricity" className="text-white" />
                </div>
              </Col>
              <Col className="ps-3">
                <Row className="g-0">
                  <Col>
                    <div className="sh-3 d-flex align-items-center lh-1-25">Utilities</div>
                  </Col>
                  <Col xs="auto">
                    <div className="cta-3 text-primary sh-3 d-flex align-items-center">10%</div>
                  </Col>
                </Row>
                <ProgressBar now={10} className="progress-xs" />
              </Col>
            </Row>
            <Row>
              <Col className="pe-4 d-flex flex-column justify-content-between align-items-end">
                <div className="text-small text-muted sh-3 d-flex align-items-center">BUDGET</div>
                <div className="text-small text-muted sh-3 d-flex align-items-center">SPEND</div>
                <div className="text-small text-muted sh-5 d-flex align-items-end">BALANCE</div>
              </Col>
              <Col xs="auto" className="d-flex flex-column justify-content-between align-items-end">
                <div className="text-muted sh-3 d-flex align-items-center">$12.000</div>
                <div className="text-muted sh-3 d-flex align-items-center">- $8.750</div>
                <div className="cta-3 text-primary sh-5 d-flex align-items-end">$3.250</div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default StatsProgressList;
