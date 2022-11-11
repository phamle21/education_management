import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const TabularDataUsers = () => {
  return (
    <Card>
      <Card.Body className="mb-n3">
        <Row className="g-0 sh-13 sh-md-6 mb-3">
          <Col xs="auto">
            <img src="/img/profile/profile-1.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
          </Col>
          <Col>
            <Card.Body className="pt-0 pb-0 pe-0 h-100">
              <Row className="g-0 h-100 align-items-start align-content-start align-content-md-center align-items-md-center">
                <Col md="5" className="d-flex align-items-center mb-md-0">
                  Winry Rockbell
                </Col>
                <Col md="4" className="d-flex align-items-center text-muted pe-2 mb-2 mb-md-0">
                  Project Manager
                </Col>
                <Col md="3" className="d-flex align-items-center justify-content-md-end">
                  <Button size="sm" variant="outline-muted" className="btn-icon btn-icon-only hover-outline me-1">
                    <CsLineIcons icon="facebook" />
                  </Button>
                  <Button size="sm" variant="outline-muted" className="btn-icon btn-icon-only hover-outline">
                    <CsLineIcons icon="twitter" />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
        <Row className="g-0 sh-13 sh-md-6 mb-3">
          <Col xs="auto">
            <img src="/img/profile/profile-2.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
          </Col>
          <Col>
            <Card.Body className="pt-0 pb-0 pe-0 h-100">
              <Row className="g-0 h-100 align-items-start align-content-start align-content-md-center align-items-md-center">
                <Col md="5" className="d-flex align-items-center mb-md-0">
                  Blaine Cottrell
                </Col>
                <Col md="4" className="d-flex align-items-center text-muted pe-2 mb-2 mb-md-0">
                  Development Lead
                </Col>
                <Col md="3" className="d-flex align-items-center justify-content-md-end">
                  <Button size="sm" variant="outline-muted" className="btn-icon btn-icon-only hover-outline me-1">
                    <CsLineIcons icon="facebook" />
                  </Button>
                  <Button size="sm" variant="outline-muted" className="btn-icon btn-icon-only hover-outline">
                    <CsLineIcons icon="twitter" />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
        <Row className="g-0 sh-13 sh-md-6 mb-3">
          <Col xs="auto">
            <img src="/img/profile/profile-3.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
          </Col>
          <Col>
            <Card.Body className="pt-0 pb-0 pe-0 h-100">
              <Row className="g-0 h-100 align-items-start align-content-start align-content-md-center align-items-md-center">
                <Col md="5" className="d-flex align-items-center mb-md-0">
                  Olli Hawkins
                </Col>
                <Col md="4" className="d-flex align-items-center text-muted pe-2 mb-2 mb-md-0">
                  Client Relations
                </Col>
                <Col md="3" className="d-flex align-items-center justify-content-md-end">
                  <Button size="sm" variant="outline-muted" className="btn-icon btn-icon-only hover-outline me-1">
                    <CsLineIcons icon="facebook" />
                  </Button>
                  <Button size="sm" variant="outline-muted" className="btn-icon btn-icon-only hover-outline">
                    <CsLineIcons icon="twitter" />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
        <Row className="g-0 sh-13 sh-md-6 mb-3">
          <Col xs="auto">
            <img src="/img/profile/profile-4.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
          </Col>
          <Col>
            <Card.Body className="pt-0 pb-0 pe-0 h-100">
              <Row className="g-0 h-100 align-items-start align-content-start align-content-md-center align-items-md-center">
                <Col md="5" className="d-flex align-items-center mb-md-0">
                  Daisy Hartley
                </Col>
                <Col md="4" className="d-flex align-items-center text-muted pe-2 mb-2 mb-md-0">
                  Customer Engagement
                </Col>
                <Col md="3" className="d-flex align-items-center justify-content-md-end">
                  <Button size="sm" variant="outline-muted" className="btn-icon btn-icon-only hover-outline me-1">
                    <CsLineIcons icon="facebook" />
                  </Button>
                  <Button size="sm" variant="outline-muted" className="btn-icon btn-icon-only hover-outline">
                    <CsLineIcons icon="twitter" />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
        <Row className="g-0 sh-13 sh-md-6 mb-3">
          <Col xs="auto">
            <img src="/img/profile/profile-5.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
          </Col>
          <Col>
            <Card.Body className="pt-0 pb-0 pe-0 h-100">
              <Row className="g-0 h-100 align-items-start align-content-start align-content-md-center align-items-md-center">
                <Col md="5" className="d-flex align-items-center mb-md-0">
                  Luna Wigglebutt
                </Col>
                <Col md="4" className="d-flex align-items-center text-muted pe-2 mb-2 mb-md-0">
                  Security Chief
                </Col>
                <Col md="3" className="d-flex align-items-center justify-content-md-end">
                  <Button size="sm" variant="outline-muted" className="btn-icon btn-icon-only hover-outline me-1">
                    <CsLineIcons icon="facebook" />
                  </Button>
                  <Button size="sm" variant="outline-muted" className="btn-icon btn-icon-only hover-outline">
                    <CsLineIcons icon="twitter" />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
