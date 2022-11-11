import React from 'react';
import { Badge, Button, Card, Col, Row } from 'react-bootstrap';
import Glide from 'components/carousel/Glide';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const CarouselSingle = () => {
  return (
    <Glide
      options={{
        gap: 0,
        perView: 1,
      }}
    >
      {[1, 2, 3].map((i) => (
        <Glide.Item key={`single.${i}`}>
          <Card className="mb-5">
            <Row className="sh-10 g-0">
              <Col className="d-flex align-items-center col-auto">
                <Card.Img src="/img/product/small/product-7.webp" alt="card image" className="card-img-horizontal sw-10" />
              </Col>
              <Col className="h-100 col">
                <Row className="h-100 align-content-center g-0">
                  <Col xs="12" lg="5" className="d-flex align-items-center">
                    <p className="heading mb-0 ps-card">Sugar Plum Gummi</p>
                  </Col>
                  <Col xs="5" sm="5" lg="3" className="d-flex align-items-center mb-1 mb-md-0">
                    <p className="mb-0 text-alternate ps-card">08.08.2021</p>
                  </Col>
                  <Col xs="3" sm="4" lg="2" className="d-flex align-items-center mb-0">
                    <Badge bg="outline-primary" className="text-uppercase">
                      New
                    </Badge>
                  </Col>
                  <Col xs="4" sm="3" lg="2" className="d-flex align-items-center justify-content-end d-none d-md-flex">
                    <div className="pe-card">
                      <Button size="sm" variant="outline-primary" className="btn-icon btn-icon-only">
                        <CsLineIcons icon="check" />
                      </Button>{' '}
                      <Button size="sm" variant="outline-secondary" className="btn-icon btn-icon-only ml-2">
                        <CsLineIcons icon="close" />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Glide.Item>
      ))}
    </Glide>
  );
};

export default CarouselSingle;
