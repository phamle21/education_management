import React from 'react';
import { Badge, Button, Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const TabularDataBadges = () => {
  return (
    <div className="mb-n2">
      <Card className="mb-2">
        <Row className="g-0 sh-14 sh-md-10">
          <Col xs="auto" className="h-100">
            <img src="/img/product/small/product-3.webp" alt="user" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body className="pt-0 pb-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col md="5" className="d-flex align-items-center mb-2 mb-md-0">
                  <Button variant="link" className="p-0 text-start">
                    Barmbrack
                  </Button>
                </Col>
                <Col xs="10" md="6" className="d-flex align-items-center text-medium">
                  <Badge bg="primary" className="me-1">
                    IN STOCK
                  </Badge>
                  <Badge bg="secondary" className="me-1">
                    SALE
                  </Badge>
                </Col>
                <Col xs="2" md="1" className="d-flex align-items-center justify-content-end">
                  <Button size="sm" variant="outline-primary" className="btn-icon btn-icon-only">
                    <CsLineIcons icon="chevron-right" />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row className="g-0 sh-14 sh-md-10">
          <Col xs="auto" className="h-100">
            <img src="/img/product/small/product-3.webp" alt="user" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body className="pt-0 pb-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col md="5" className="d-flex align-items-center mb-2 mb-md-0">
                  <Button variant="link" className="p-0 text-start">
                    Cheesymite Scroll
                  </Button>
                </Col>
                <Col xs="10" md="6" className="d-flex align-items-center text-medium">
                  <Badge bg="outline-separator" className="me-1">
                    IN STOCK
                  </Badge>
                  <Badge bg="outline-separator" className="me-1">
                    SALE
                  </Badge>
                </Col>
                <Col xs="2" md="1" className="d-flex align-items-center justify-content-end">
                  <Button size="sm" variant="outline-primary" className="btn-icon btn-icon-only">
                    <CsLineIcons icon="chevron-right" />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row className="g-0 sh-14 sh-md-10">
          <Col xs="auto" className="h-100">
            <img src="/img/product/small/product-3.webp" alt="user" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body className="pt-0 pb-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col md="5" className="d-flex align-items-center mb-2 mb-md-0">
                  <Button variant="link" className="p-0 text-start">
                    Cholermüs
                  </Button>
                </Col>
                <Col xs="10" md="6" className="d-flex align-items-center text-medium">
                  <Badge bg="primary" className="me-1">
                    IN STOCK
                  </Badge>
                  <Badge bg="outline-separator" className="me-1">
                    SALE
                  </Badge>
                </Col>
                <Col xs="2" md="1" className="d-flex align-items-center justify-content-end">
                  <Button size="sm" variant="outline-primary" className="btn-icon btn-icon-only">
                    <CsLineIcons icon="chevron-right" />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row className="g-0 sh-14 sh-md-10">
          <Col xs="auto" className="h-100">
            <img src="/img/product/small/product-3.webp" alt="user" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body className="pt-0 pb-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col md="5" className="d-flex align-items-center mb-2 mb-md-0">
                  <Button variant="link" className="p-0 text-start">
                    Ruisreikäleipä
                  </Button>
                </Col>
                <Col xs="10" md="6" className="d-flex align-items-center text-medium">
                  <Badge bg="outline-separator" className="me-1">
                    IN STOCK
                  </Badge>
                  <Badge bg="secondary" className="me-1">
                    SALE
                  </Badge>
                </Col>
                <Col xs="2" md="1" className="d-flex align-items-center justify-content-end">
                  <Button size="sm" variant="outline-primary" className="btn-icon btn-icon-only">
                    <CsLineIcons icon="chevron-right" />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
