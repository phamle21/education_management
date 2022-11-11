import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const TabularDataTextData = () => {
  return (
    <div className="mb-n2">
      <Card className="mb-2 sh-15 sh-md-6">
        <Card.Body className="pt-0 pb-0 h-100">
          <Row className="g-0 h-100 align-content-center">
            <Col md="5" className="d-flex align-items-center mb-2 mb-md-0">
              <NavLink to="#" className="body-link text-truncate">
                Barmbrack
              </NavLink>
            </Col>
            <Col md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
              <Badge bg="outline-secondary" className="me-1">
                STOCK
              </Badge>
            </Col>
            <Col md="3" className="d-flex align-items-center text-medium text-danger justify-content-md-center mb-1 mb-md-0">
              <CsLineIcons icon="arrow-bottom" className="me-1" size="13" />
              <span className="text-medium">-18.4%</span>
            </Col>
            <Col md="2" className="d-flex align-items-center justify-content-md-end text-muted text-medium mb-1 mb-md-0">
              <span>$ 3.25</span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-2 sh-15 sh-md-6">
        <Card.Body className="pt-0 pb-0 h-100">
          <Row className="g-0 h-100 align-content-center">
            <Col md="5" className="d-flex align-items-center mb-2 mb-md-0">
              <NavLink to="#" className="body-link text-truncate">
                Cheesymite Scroll
              </NavLink>
            </Col>
            <Col md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
              <Badge bg="outline-secondary" className="me-1">
                TREND
              </Badge>
            </Col>
            <Col md="3" className="d-flex align-items-center text-medium text-danger justify-content-md-center mb-1 mb-md-0">
              <CsLineIcons icon="arrow-bottom" className="me-1" size="13" />
              <span className="text-medium">-13.9%</span>
            </Col>
            <Col md="2" className="d-flex align-items-center justify-content-md-end text-muted text-medium mb-1 mb-md-0">
              <span>$ 4.50</span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-2 sh-15 sh-md-6">
        <Card.Body className="pt-0 pb-0 h-100">
          <Row className="g-0 h-100 align-content-center">
            <Col md="5" className="d-flex align-items-center mb-2 mb-md-0">
              <NavLink to="#" className="body-link text-truncate">
                Cholermüs
              </NavLink>
            </Col>
            <Col md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
              <Badge bg="outline-secondary" className="me-1">
                SALE
              </Badge>
            </Col>
            <Col md="3" className="d-flex align-items-center text-medium text-success justify-content-md-center mb-1 mb-md-0">
              <CsLineIcons icon="arrow-top" className="me-1" size="13" />
              <span className="text-medium">+9.7%</span>
            </Col>
            <Col md="2" className="d-flex align-items-center justify-content-md-end text-muted text-medium mb-1 mb-md-0">
              <span>$ 1.75</span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-2 sh-15 sh-md-6">
        <Card.Body className="pt-0 pb-0 h-100">
          <Row className="g-0 h-100 align-content-center">
            <Col md="5" className="d-flex align-items-center mb-2 mb-md-0">
              <NavLink to="#" className="body-link text-truncate">
                Ruisreikäleipä
              </NavLink>
            </Col>
            <Col md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
              <Badge bg="outline-secondary" className="me-1">
                SALE
              </Badge>
            </Col>
            <Col md="3" className="d-flex align-items-center text-medium text-success justify-content-md-center mb-1 mb-md-0">
              <CsLineIcons icon="arrow-top" className="me-1" size="13" />
              <span className="text-medium">+5.3%</span>
            </Col>
            <Col md="2" className="d-flex align-items-center justify-content-md-end text-muted text-medium mb-1 mb-md-0">
              <span>$ 3.00</span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-2 sh-15 sh-md-6">
        <Card.Body className="pt-0 pb-0 h-100">
          <Row className="g-0 h-100 align-content-center">
            <Col md="5" className="d-flex align-items-center mb-2 mb-md-0">
              <NavLink to="#" className="body-link text-truncate">
                Bagel
              </NavLink>
            </Col>
            <Col md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
              <Badge bg="outline-secondary" className="me-1">
                STOCK
              </Badge>
            </Col>
            <Col md="3" className="d-flex align-items-center text-medium text-success justify-content-md-center mb-1 mb-md-0">
              <CsLineIcons icon="arrow-top" className="me-1" size="13" />
              <span className="text-medium">+2.3%</span>
            </Col>
            <Col md="2" className="d-flex align-items-center justify-content-md-end text-muted text-medium mb-1 mb-md-0">
              <span>$ 4.25</span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-2 sh-15 sh-md-6">
        <Card.Body className="pt-0 pb-0 h-100">
          <Row className="g-0 h-100 align-content-center">
            <Col md="5" className="d-flex align-items-center mb-2 mb-md-0">
              <NavLink to="#" className="body-link text-truncate">
                Buccellato di Lucca
              </NavLink>
            </Col>
            <Col md="2" className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
              <Badge bg="outline-secondary" className="me-1">
                TREND
              </Badge>
            </Col>
            <Col md="3" className="d-flex align-items-center text-medium text-danger justify-content-md-center mb-1 mb-md-0">
              <CsLineIcons icon="arrow-bottom" className="me-1" size="13" />
              <span className="text-medium">-5.3%</span>
            </Col>
            <Col md="2" className="d-flex align-items-center justify-content-md-end text-muted text-medium mb-1 mb-md-0">
              <span>$ 3.75</span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
