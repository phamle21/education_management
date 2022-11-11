import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const TabularDataCart = () => {
  return (
    <Card>
      <Card.Body className="mb-n3">
        <Row className="g-0 sh-9 mb-3">
          <Col xs="auto">
            <img src="/img/product/small/product-1.webp" className="card-img rounded-md h-100 sw-7" alt="thumb" />
          </Col>
          <Col>
            <div className="ps-4 pt-0 pb-0 pe-0 h-100">
              <Row className="g-0 h-100 align-items-start align-content-center">
                <Col xs="11" className="d-flex flex-column mb-2">
                  <div className="">Kommissbrot</div>
                  <div className="text-muted text-small">Whole Wheat</div>
                </Col>
                <Col xs="1" className="text-end">
                  <Button size="sm" variant="outline-muted" className="btn-icon btn-icon-only p-1 sw-3 sh-3">
                    <CsLineIcons icon="close" />
                  </Button>
                </Col>
                <Col xs="12" className="d-flex flex-column mb-md-0 pt-1">
                  <Row className="g-0">
                    <Col xs="6" className="d-flex flex-row pe-2 align-items-end text-alternate">
                      <span>12</span>
                      <span className="text-muted ms-1 me-1">x</span>
                      <span>
                        <span className="text-small">$</span>
                        1.10
                      </span>
                    </Col>
                    <Col xs="6" className="d-flex flex-row align-items-end justify-content-end text-alternate">
                      <span>
                        <span className="text-small">$</span>
                        13.20
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="g-0 sh-9 mb-3">
          <Col xs="auto">
            <img src="/img/product/small/product-1.webp" className="card-img rounded-md h-100 sw-7" alt="thumb" />
          </Col>
          <Col>
            <div className="ps-4 pt-0 pb-0 pe-0 h-100">
              <Row className="g-0 h-100 align-items-start align-content-center">
                <Col xs="11" className="d-flex flex-column mb-2">
                  <div className="">Ruisreikäleipä</div>
                  <div className="text-muted text-small">Multigrain</div>
                </Col>
                <Col xs="1" className="text-end">
                  <Button size="sm" variant="outline-muted" className="btn-icon btn-icon-only p-1 sw-3 sh-3">
                    <CsLineIcons icon="close" />
                  </Button>
                </Col>
                <Col xs="12" className="d-flex flex-column mb-md-0 pt-1">
                  <Row className="g-0">
                    <Col xs="6" className="d-flex flex-row pe-2 align-items-end text-alternate">
                      <span>3</span>
                      <span className="text-muted ms-1 me-1">x</span>
                      <span>
                        <span className="text-small">$</span>
                        2.75
                      </span>
                    </Col>
                    <Col xs="6" className="d-flex flex-row align-items-end justify-content-end text-alternate">
                      <span>
                        <span className="text-small">$</span>
                        8.25
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="g-0 sh-9 mb-3">
          <Col xs="auto">
            <img src="/img/product/small/product-1.webp" className="card-img rounded-md h-100 sw-7" alt="thumb" />
          </Col>
          <Col>
            <div className="ps-4 pt-0 pb-0 pe-0 h-100">
              <Row className="g-0 h-100 align-items-start align-content-center">
                <Col xs="11" className="d-flex flex-column mb-2">
                  <div className="">Yeast Karavai</div>
                  <div className="text-muted text-small">Sourdough</div>
                </Col>
                <Col xs="1" className="text-end">
                  <Button size="sm" variant="outline-muted" className="btn-icon btn-icon-only p-1 sw-3 sh-3">
                    <CsLineIcons icon="close" />
                  </Button>
                </Col>
                <Col xs="12" className="d-flex flex-column mb-md-0 pt-1">
                  <Row className="g-0">
                    <Col xs="6" className="d-flex flex-row pe-2 align-items-end text-alternate">
                      <span>4</span>
                      <span className="text-muted ms-1 me-1">x</span>
                      <span>
                        <span className="text-small">$</span>
                        6.25
                      </span>
                    </Col>
                    <Col xs="6" className="d-flex flex-row align-items-end justify-content-end text-alternate">
                      <span>
                        <span className="text-small">$</span>
                        18.75
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="border-0 pt-0">
        <Row className="g-0">
          <Col md="7" className="order-2 order-md-1 d-flex flex-row justify-content-end justify-content-md-start align-items-center">
            <Button variant="outline-primary" size="sm" className="me-1">
              View Cart
            </Button>
            <Button variant="primary" size="sm">
              Purchase
            </Button>
          </Col>
          <Col md="5" className="d-flex flex-column align-items-end order-1 order-md-2 mb-3 mb-md-0">
            <div className="mb-1">
              <span className="me-2 text-muted">Shipping</span>
              <span>
                <span className="text-small text-muted">$</span>
                12.50
              </span>
            </div>
            <div>
              <span className="me-2 text-muted">Grand Total</span>
              <span>
                <span className="text-small text-muted">$</span>
                345.50
              </span>
            </div>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
