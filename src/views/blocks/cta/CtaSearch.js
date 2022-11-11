import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const CtaSearch = () => {
  return (
    <Card className="card w-100 sh-25 sh-sm-19">
      <img src="/img/banner/cta-wide-2.webp" className="card-img h-100" alt="card image" />
      <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
        <div className="cta-3 text-black">Looking for a recipe?</div>
        <div className="mb-3 cta-3 text-primary">Search here!</div>
        <Row className="gx-2">
          <Col xs="12" sm="6">
            <div className="d-flex flex-column justify-content-start">
              <div className="text-muted mb-3 mb-sm-0">
                <input type="email" className="form-control" placeholder="E-mail" />
              </div>
            </div>
          </Col>
          <Col xs="12" sm="auto">
            <Button variant="primary" className="btn-icon btn-icon-start">
              <CsLineIcons icon="search" /> <span>Search</span>
            </Button>
          </Col>
        </Row>
      </div>
    </Card>
  );
};
