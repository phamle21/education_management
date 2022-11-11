import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const TabularDataButtons = () => {
  return (
    <div className="mb-n2">
      <Card className="mb-2">
        <Row className="g-0 sh-14 sh-md-10">
          <Col xs="auto" className="h-100">
            <img src="/img/product/small/product-2.webp" alt="user" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body className="pt-0 pb-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col md="7" className="d-flex flex-column mb-2 mb-md-0">
                  <div>Kommissbrot</div>
                  <div className="text-small text-muted text-truncate">Icing liquorice olegário jujubes oat cake.</div>
                </Col>
                <Col md="5" className="d-flex align-items-center justify-content-md-end">
                  <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                    <CsLineIcons icon="edit-square" width="15" height="15" className="me-xxl-2" />
                    <span className="d-none d-xxl-inline-block">Edit</span>
                  </Button>
                  <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                    <CsLineIcons icon="bin" width="15" height="15" className="me-xxl-2" />
                    <span className="d-none d-xxl-inline-block">Delete</span>
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
            <img src="/img/product/small/product-2.webp" alt="user" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body className="pt-0 pb-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col md="7" className="d-flex flex-column mb-2 mb-md-0">
                  <div>Yeast Karavai</div>
                  <div className="text-small text-muted text-truncate">Gummi liquorice olegário jujubes cookie.</div>
                </Col>
                <Col md="5" className="d-flex align-items-center justify-content-md-end">
                  <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                    <CsLineIcons icon="edit-square" width="15" height="15" className="me-xxl-2" />
                    <span className="d-none d-xxl-inline-block">Edit</span>
                  </Button>
                  <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                    <CsLineIcons icon="bin" width="15" height="15" className="me-xxl-2" />
                    <span className="d-none d-xxl-inline-block">Delete</span>
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
            <img src="/img/product/small/product-2.webp" alt="user" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body className="pt-0 pb-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col md="7" className="d-flex flex-column mb-2 mb-md-0">
                  <div>Soda Bread</div>
                  <div className="text-small text-muted text-truncate">Marshmallow topping icing oat cake.</div>
                </Col>
                <Col md="5" className="d-flex align-items-center justify-content-md-end">
                  <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                    <CsLineIcons icon="edit-square" width="15" height="15" className="me-xxl-2" />
                    <span className="d-none d-xxl-inline-block">Edit</span>
                  </Button>
                  <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                    <CsLineIcons icon="bin" width="15" height="15" className="me-xxl-2" />
                    <span className="d-none d-xxl-inline-block">Delete</span>
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
            <img src="/img/product/small/product-2.webp" alt="user" className="card-img card-img-horizontal sw-11" />
          </Col>
          <Col>
            <Card.Body className="pt-0 pb-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col md="7" className="d-flex flex-column mb-2 mb-md-0">
                  <div>Cheesymite Scroll</div>
                  <div className="text-small text-muted text-truncate">Tootsie brownie ice cream.</div>
                </Col>
                <Col md="5" className="d-flex align-items-center justify-content-md-end">
                  <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                    <CsLineIcons icon="edit-square" width="15" height="15" className="me-xxl-2" />
                    <span className="d-none d-xxl-inline-block">Edit</span>
                  </Button>
                  <Button variant="outline-primary" size="sm" className="btn-icon btn-icon-start ms-1">
                    <CsLineIcons icon="bin" width="15" height="15" className="me-xxl-2" />
                    <span className="d-none d-xxl-inline-block">Delete</span>
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
