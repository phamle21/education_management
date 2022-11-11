import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';

export const TabularDataRating = () => {
  return (
    <div className="mb-n2">
      <Card className="mb-2">
        <Row className="g-0 h-auto sh-sm-17 sh-lg-9">
          <Col xs="12" sm="auto">
            <img src="/img/product/small/product-3.webp" alt="user" className="card-img card-img-horizontal-sm sh-24 h-sm-100 sw-lg-12 sw-sm-16" />
          </Col>
          <Col xs="12" className="col-sm">
            <Card.Body className="pt-sm-0 pb-sm-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col lg="5" className="d-flex flex-column mb-lg-0 mb-2 mb-lg-0 pe-3 d-flex">
                  <NavLink to="#">
                    <div className="lh-1">Spelt Bread</div>
                    <div className="text-small text-muted text-truncate">Icing liquorice olegário jujubes oat cake.</div>
                  </NavLink>
                </Col>
                <Col xs="8" sm="12" lg="3" className="d-flex pe-1 mb-2 mb-lg-0 align-items-lg-center">
                  <Rating
                    initialRating={5}
                    readonly
                    emptySymbol={<i className="cs-star text-primary" />}
                    fullSymbol={<i className="cs-star-full text-primary" />}
                  />
                </Col>
                <Col xs="6" lg="2" className="d-flex flex-column pe-1 align-items-lg-end">
                  <div className="lh-1 text-alternate">
                    <span>
                      <span className="text-small">$</span>
                      2.80
                    </span>
                  </div>
                  <div className="text-muted text-small">Price</div>
                </Col>
                <Col xs="6" lg="2" className="d-flex flex-column pe-1 align-items-lg-end">
                  <div className="lh-1 text-alternate">1.552</div>
                  <div className="text-muted text-small">Sales</div>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row className="g-0 h-auto sh-sm-17 sh-lg-9">
          <Col xs="12" sm="auto">
            <img src="/img/product/small/product-3.webp" alt="user" className="card-img card-img-horizontal-sm sh-24 h-sm-100 sw-lg-12 sw-sm-16" />
          </Col>
          <Col xs="12" className="col-sm">
            <Card.Body className="pt-sm-0 pb-sm-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col lg="5" className="d-flex flex-column mb-lg-0 mb-2 mb-lg-0 pe-3 d-flex">
                  <NavLink to="#">
                    <div className="lh-1">Cheesymite Scroll</div>
                    <div className="text-small text-muted text-truncate">Cake cake topping marzipan powder.</div>
                  </NavLink>
                </Col>
                <Col xs="8" sm="12" lg="3" className="d-flex pe-1 mb-2 mb-lg-0 align-items-lg-center">
                  <Rating
                    initialRating={5}
                    readonly
                    emptySymbol={<i className="cs-star text-primary" />}
                    fullSymbol={<i className="cs-star-full text-primary" />}
                  />
                </Col>
                <Col xs="6" lg="2" className="d-flex flex-column pe-1 align-items-lg-end">
                  <div className="lh-1 text-alternate">
                    <span>
                      <span className="text-small">$</span>
                      1.50
                    </span>
                  </div>
                  <div className="text-muted text-small">Price</div>
                </Col>
                <Col xs="6" lg="2" className="d-flex flex-column pe-1 align-items-lg-end">
                  <div className="lh-1 text-alternate">1.445</div>
                  <div className="text-muted text-small">Sales</div>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row className="g-0 h-auto sh-sm-17 sh-lg-9">
          <Col xs="12" sm="auto">
            <img src="/img/product/small/product-3.webp" alt="user" className="card-img card-img-horizontal-sm sh-24 h-sm-100 sw-lg-12 sw-sm-16" />
          </Col>
          <Col xs="12" className="col-sm">
            <Card.Body className="pt-sm-0 pb-sm-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col lg="5" className="d-flex flex-column mb-lg-0 mb-2 mb-lg-0 pe-3 d-flex">
                  <NavLink to="#">
                    <div className="lh-1">Ruisreikäleipä</div>
                    <div className="text-small text-muted text-truncate">Dragée pudding caramels oat cake icing.</div>
                  </NavLink>
                </Col>
                <Col xs="8" sm="12" lg="3" className="d-flex pe-1 mb-2 mb-lg-0 align-items-lg-center">
                  <Rating
                    initialRating={4}
                    readonly
                    emptySymbol={<i className="cs-star text-primary" />}
                    fullSymbol={<i className="cs-star-full text-primary" />}
                  />
                </Col>
                <Col xs="6" lg="2" className="d-flex flex-column pe-1 align-items-lg-end">
                  <div className="lh-1 text-alternate">
                    <span>
                      <span className="text-small">$</span>
                      4.75
                    </span>
                  </div>
                  <div className="text-muted text-small">Price</div>
                </Col>
                <Col xs="6" lg="2" className="d-flex flex-column pe-1 align-items-lg-end">
                  <div className="lh-1 text-alternate">2.631</div>
                  <div className="text-muted text-small">Sales</div>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row className="g-0 h-auto sh-sm-17 sh-lg-9">
          <Col xs="12" sm="auto">
            <img src="/img/product/small/product-3.webp" alt="user" className="card-img card-img-horizontal-sm sh-24 h-sm-100 sw-lg-12 sw-sm-16" />
          </Col>
          <Col xs="12" className="col-sm">
            <Card.Body className="pt-sm-0 pb-sm-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col lg="5" className="d-flex flex-column mb-lg-0 mb-2 mb-lg-0 pe-3 d-flex">
                  <NavLink to="#">
                    <div className="lh-1">Buccellato di Lucca</div>
                    <div className="text-small text-muted text-truncate">Cookie bear claw tootsie roll caramels.</div>
                  </NavLink>
                </Col>
                <Col xs="8" sm="12" lg="3" className="d-flex pe-1 mb-2 mb-lg-0 align-items-lg-center">
                  <Rating
                    initialRating={5}
                    readonly
                    emptySymbol={<i className="cs-star text-primary" />}
                    fullSymbol={<i className="cs-star-full text-primary" />}
                  />
                </Col>
                <Col xs="6" lg="2" className="d-flex flex-column pe-1 align-items-lg-end">
                  <div className="lh-1 text-alternate">
                    <span>
                      <span className="text-small">$</span>
                      3.99
                    </span>
                  </div>
                  <div className="text-muted text-small">Price</div>
                </Col>
                <Col xs="6" lg="2" className="d-flex flex-column pe-1 align-items-lg-end">
                  <div className="lh-1 text-alternate">1.833</div>
                  <div className="text-muted text-small">Sales</div>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
