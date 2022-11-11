import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ListBasicItems = () => {
  return (
    <div className="mb-n2">
      <Card className="mb-2">
        <Row className="g-0 sh-10">
          <Col xs="auto" className="h-100">
            <img src="/img/product/small/product-1.webp" alt="product-1" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
              <div className="d-flex flex-column">
                <Button variant="link" className="p-0 stretched-link text-start">
                  Barmbrack
                </Button>
                <div className="text-small text-muted text-truncate">Chocolate cake icing liquorice oat roll bar marzipan marzipan carrot.</div>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row className="g-0 sh-10">
          <Col xs="auto" className="h-100">
            <img src="/img/product/small/product-1.webp" alt="product-1" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
              <div className="d-flex flex-column">
                <Button variant="link" className="p-0 stretched-link text-start">
                  Melonpan
                </Button>
                <div className="text-small text-muted text-truncate">
                  Tootsie candy jelly roll chocolate bar cheesecake bonbon jelly beans sugar plum gingerbread cake wafer gummi.
                </div>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row className="g-0 sh-10">
          <Col xs="auto" className="h-100">
            <img src="/img/product/small/product-1.webp" alt="product-1" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
              <div className="d-flex flex-column">
                <Button variant="link" className="p-0 stretched-link text-start">
                  Rieska
                </Button>
                <div className="text-small text-muted text-truncate">Jujubes cream toffee candy jelly chups jujubes muffin chupa chups carrot cake chupa.</div>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ListBasicItems;
