import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const TabularDataLabels = () => {
  return (
    <div className="mb-n2">
      <Card className="mb-2 bg-transparent no-shadow d-none d-md-block sh-3">
        <Card.Body className="pt-0 pb-0 h-100">
          <Row className="g-0 h-100 align-content-center">
            <Col xs="12" md="4" className="d-flex align-items-center mb-2 mb-md-0 text-muted text-small">
              TITLE
            </Col>
            <Col xs="6" md="2" className="d-flex align-items-center text-alternate text-medium justify-content-end text-muted text-small">
              CATEGORY
            </Col>
            <Col xs="6" md="2" className="d-flex align-items-center justify-content-end text-alternate text-medium justify-content-end text-muted text-small">
              PRICE
            </Col>
            <Col xs="6" md="2" className="d-flex align-items-center text-alternate text-medium justify-content-end text-muted text-small">
              SALES
            </Col>
            <Col xs="6" md="2" className="d-flex align-items-center text-alternate text-medium justify-content-end text-muted text-small">
              STOCK
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-2 sh-19 sh-md-8">
        <Card.Body className="pt-0 pb-0 h-100">
          <Row className="g-0 h-100 align-content-center">
            <Col md="4" className="d-flex flex-column justify-content-center mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Title</div>
              <NavLink to="#" className="text-truncate">
                Barmbrack
              </NavLink>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Category</div>
              <div className="text-alternate">Whole Wheat</div>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Price</div>
              <div className="text-alternate">
                <span>
                  <span className="text-small">$</span>
                  3.25
                </span>
              </div>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Sale</div>
              <div className="text-alternate">789</div>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Stock</div>
              <div className="text-alternate">2.345</div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-2 sh-19 sh-md-8">
        <Card.Body className="pt-0 pb-0 h-100">
          <Row className="g-0 h-100 align-content-center">
            <Col md="4" className="d-flex flex-column justify-content-center mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Title</div>
              <NavLink to="#" className="text-truncate">
                Cheesymite Scroll
              </NavLink>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Category</div>
              <div className="text-alternate">Multigrain</div>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Price</div>
              <div className="text-alternate">
                <span>
                  <span className="text-small">$</span>
                  5.10
                </span>
              </div>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Sale</div>
              <div className="text-alternate">234</div>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Stock</div>
              <div className="text-alternate">1.937</div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-2 sh-19 sh-md-8">
        <Card.Body className="pt-0 pb-0 h-100">
          <Row className="g-0 h-100 align-content-center">
            <Col md="4" className="d-flex flex-column justify-content-center mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Title</div>
              <NavLink to="#" className="text-truncate">
                Cholermüs
              </NavLink>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Category</div>
              <div className="text-alternate">Whole Wheat</div>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Price</div>
              <div className="text-alternate">
                <span>
                  <span className="text-small">$</span>
                  5.10
                </span>
              </div>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Sale</div>
              <div className="text-alternate">852</div>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Stock</div>
              <div className="text-alternate">2.493</div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-2 sh-19 sh-md-8">
        <Card.Body className="pt-0 pb-0 h-100">
          <Row className="g-0 h-100 align-content-center">
            <Col md="4" className="d-flex flex-column justify-content-center mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Title</div>
              <NavLink to="#" className="text-truncate">
                Ruisreikäleipä
              </NavLink>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Category</div>
              <div className="text-alternate">Sourdough</div>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Price</div>
              <div className="text-alternate">
                <span>
                  <span className="text-small">$</span>
                  3.75
                </span>
              </div>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Sale</div>
              <div className="text-alternate">562</div>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-1 mb-md-0">
              <div className="text-muted text-small d-md-none">Stock</div>
              <div className="text-alternate">1.970</div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
