import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ImagesFluid = () => {
  return (
    <>
      <Row>
        <Col xs="12" sm="2">
          <Card body className="mb-5">
            <img src="/img/product/small/product-1.webp" className="img-fluid rounded-md" alt="Fluid image" />
          </Card>
        </Col>
        <Col xs="12" sm="3">
          <Card body className="mb-5">
            <img src="/img/product/small/product-1.webp" className="img-fluid rounded-md" alt="Fluid image" />
          </Card>
        </Col>
        <Col xs="12" sm="4">
          <Card body className="mb-5">
            <img src="/img/product/small/product-1.webp" className="img-fluid rounded-md" alt="Fluid image" />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ImagesFluid;
