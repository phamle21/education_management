import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ListHorizontalThumbs = () => {
  return (
    <Card>
      <Card.Body className="mb-n2">
        <Row className="g-0 sh-6 mb-2 position-relative">
          <Col xs="auto" className="h-100">
            <img src="/img/product/small/product-3.webp" className="card-img rounded-md h-100 sw-9" alt="thumb" />
          </Col>
          <Col className="h-100">
            <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-0 h-100 justify-content-center">
              <div className="d-flex flex-column">
                <Button variant="link" className="p-0 stretched-link text-start">
                  Kommissbrot
                </Button>
                <div className="text-small text-muted text-truncate">Macaroon biscuit sesame plum gummi bears jujubes.</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="g-0 sh-6 mb-2 position-relative">
          <Col xs="auto" className="h-100">
            <img src="/img/product/small/product-3.webp" className="card-img rounded-md h-100 sw-9" alt="thumb" />
          </Col>
          <Col className="h-100">
            <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-0 h-100 justify-content-center">
              <div className="d-flex flex-column">
                <Button variant="link" className="p-0 stretched-link text-start">
                  Panettone
                </Button>
                <div className="text-small text-muted text-truncate">Carrot cake pie chocolate gummi bears jujubes.</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="g-0 sh-6 mb-2 position-relative">
          <Col xs="auto" className="h-100">
            <img src="/img/product/small/product-3.webp" className="card-img rounded-md h-100 sw-9" alt="thumb" />
          </Col>
          <Col className="h-100">
            <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-0 h-100 justify-content-center">
              <div className="d-flex flex-column">
                <Button variant="link" className="p-0 stretched-link text-start">
                  Yeast Karavai
                </Button>
                <div className="text-small text-muted text-truncate">Cookie jelly beans gummi bears jujubes.</div>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ListHorizontalThumbs;
