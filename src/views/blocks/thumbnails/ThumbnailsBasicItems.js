import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';

export const ThumbnailsBasicItems = () => {
  return (
    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4">
      <Col className="mb-5">
        <Card className="h-100">
          <Badge bg="primary" className="me-1 position-absolute e-3 t-n2 z-index-1">
            SALE
          </Badge>
          <Card.Img src="/img/product/small/product-1.webp" className="card-img-top sh-22" alt="card image" />
          <Card.Body>
            <h5 className="heading mb-0">
              <NavLink to="#" className="body-link stretched-link">
                Introduction to Bread Making
              </NavLink>
            </h5>
          </Card.Body>
          <Card.Footer className="border-0 pt-0">
            <div className="mb-2">
              <Rating
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="text-muted d-inline-block text-small align-text-top ms-1">(22)</div>
            </div>
            <div className="card-text mb-0">
              <div className="text-muted text-overline text-small">
                <del>$ 55.00</del>
              </div>
              <div>$ 41.25</div>
            </div>
          </Card.Footer>
        </Card>
      </Col>
      <Col className="mb-5">
        <Card className="h-100">
          <Card.Img src="/img/product/small/product-1.webp" className="card-img-top sh-22" alt="card image" />
          <Card.Body>
            <h5 className="heading mb-0">
              <NavLink to="#" className="body-link stretched-link">
                14 Facts About Sugar
              </NavLink>
            </h5>
          </Card.Body>
          <Card.Footer className="border-0 pt-0">
            <div className="mb-2">
              <Rating
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="text-muted d-inline-block text-small align-text-top ms-1">(52)</div>
            </div>
            <div className="card-text mb-0">
              <div className="text-muted text-overline text-small">
                <del>$ 26.10</del>
              </div>
              <div>$ 22.25</div>
            </div>
          </Card.Footer>
        </Card>
      </Col>
      <Col className="mb-5">
        <Card className="h-100">
          <Card.Img src="/img/product/small/product-1.webp" className="card-img-top sh-22" alt="card image" />
          <Card.Body>
            <h5 className="heading mb-0">
              <NavLink to="#" className="body-link stretched-link">
                Apple Cake Recipe
              </NavLink>
            </h5>
          </Card.Body>
          <Card.Footer className="border-0 pt-0">
            <div className="mb-2">
              <Rating
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="text-muted d-inline-block text-small align-text-top ms-1">(18)</div>
            </div>
            <div className="card-text mb-0">
              <div className="text-muted text-overline text-small">
                <del>$ 22.50</del>
              </div>
              <div>$ 14.50</div>
            </div>
          </Card.Footer>
        </Card>
      </Col>
      <Col className="mb-5">
        <Card className="h-100">
          <Badge bg="secondary" className="me-1 position-absolute e-3 t-n2 z-index-1">
            NEW
          </Badge>
          <Card.Img src="/img/product/small/product-1.webp" className="card-img-top sh-22" alt="card image" />
          <Card.Body>
            <h5 className="heading mb-0">
              <NavLink to="#" className="body-link stretched-link">
                Dough for the Molds
              </NavLink>
            </h5>
          </Card.Body>
          <Card.Footer className="border-0 pt-0">
            <div className="mb-2">
              <Rating
                initialRating={5}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="text-muted d-inline-block text-small align-text-top ms-1">(5)</div>
            </div>
            <div className="card-text mb-0">
              <div className="text-muted text-overline text-small">
                <del>$ 33.95</del>
              </div>
              <div>$ 19.00</div>
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};
