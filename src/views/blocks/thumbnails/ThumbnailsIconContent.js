import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const ThumbnailsIconContent = () => {
  return (
    <Row className="row row-cols-1 row-cols-sm-2 row-cols-xl-3">
      <Col className="mb-5">
        <Card className="h-100">
          <Card.Img src="/img/product/small/product-6.webp" className="card-img-top sh-16" alt="card image" />
          <Card.Body>
            <h5 className="heading mb-0">
              <NavLink to="#" className="body-link stretched-link">
                Tricks for Crispy Bread Baking
              </NavLink>
            </h5>
          </Card.Body>
          <Card.Footer className="border-0 pt-0">
            <Row className="g-0">
              <Col xs="auto" className="pe-3">
                <CsLineIcons icon="star" size="15" className="text-primary me-2" />
                <span className="align-middle">4.8</span>
              </Col>
              <Col>
                <CsLineIcons icon="clock" size="15" className="text-primary me-2" />
                <span className="align-middle">00:40</span>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>
      <Col className="mb-5">
        <Card className="h-100">
          <Card.Img src="/img/product/small/product-6.webp" className="card-img-top sh-16" alt="card image" />
          <Card.Body>
            <h5 className="heading mb-0">
              <NavLink to="#" className="body-link stretched-link">
                10 Secrets Every Southern Baker
              </NavLink>
            </h5>
          </Card.Body>
          <Card.Footer className="border-0 pt-0">
            <Row className="g-0">
              <Col xs="auto" className="pe-3">
                <CsLineIcons icon="star" size="15" className="text-primary me-2" />
                <span className="align-middle">4.9</span>
              </Col>
              <Col>
                <CsLineIcons icon="clock" size="15" className="text-primary me-2" />
                <span className="align-middle">02:30</span>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>
      <Col className="mb-5">
        <Card className="h-100">
          <Card.Img src="/img/product/small/product-6.webp" className="card-img-top sh-16" alt="card image" />
          <Card.Body>
            <h5 className="heading mb-0">
              <NavLink to="#" className="body-link stretched-link">
                Introduction to Bread Making
              </NavLink>
            </h5>
          </Card.Body>
          <Card.Footer className="border-0 pt-0">
            <Row className="g-0">
              <Col xs="auto" className="pe-3">
                <CsLineIcons icon="star" size="15" className="text-primary me-2" />
                <span className="align-middle">4.5</span>
              </Col>
              <Col>
                <CsLineIcons icon="clock" size="15" className="text-primary me-2" />
                <span className="align-middle">00:15</span>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};
