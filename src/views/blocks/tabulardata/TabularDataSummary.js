import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Clamp from 'components/clamp';

export const TabularDataSummary = () => {
  return (
    <div className="mb-n2">
      <Card className="mb-2">
        <Row className="g-0 h-auto sh-sm-18">
          <Col xs="12" sm="auto" className="h-100">
            <img src="/img/product/small/product-1.webp" alt="product" className="card-img card-img-horizontal-sm sh-24 h-sm-100 sw-sm-18" />
          </Col>
          <Col xs="12" className="col-sm">
            <Card.Body className="h-100">
              <NavLink to="#" className="d-flex flex-column mb-lg-0 mb-3 mb-lg-0 pe-3">
                <div className="lh-1 mb-3 heading">Ruisreikäleipä</div>
                <Clamp className="text-medium text-muted mb-2" clamp="2">
                  Chocolate gingerbread jujubes marshmallow chocolate bar sugar plum tart. Lollipop pudding toffee muffin marshmallow powder brownie candy canes
                  biscuit. Ice cream liquorice jelly beans ice cream tootsie roll chupa chups. Jelly brownie sesame snaps. Jelly beans chocolate cake bonbon
                  donut bear claw. Danish croissant bonbon danish muffin icing sugar plum marzipan oat cake.
                </Clamp>
                <div className="text-small text-muted">23.10.2021</div>
              </NavLink>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row className="g-0 h-auto sh-sm-18">
          <Col xs="12" sm="auto" className="h-100">
            <img src="/img/product/small/product-2.webp" alt="product" className="card-img card-img-horizontal-sm sh-24 h-sm-100 sw-sm-18" />
          </Col>
          <Col xs="12" className="col-sm">
            <Card.Body className="h-100">
              <NavLink to="#" className="d-flex flex-column mb-lg-0 mb-3 mb-lg-0 pe-3">
                <div className="lh-1 mb-3 heading">Boule</div>
                <Clamp className="text-medium text-muted mb-2" clamp="2">
                  Sweet roll soufflé candy jelly wafer cake sweet roll macaroon lemon drops. Pastry chocolate jujubes dessert. Cookie chupa chups candy canes
                  marshmallow sugar plum dessert donut muffin bonbon. Chocolate gingerbread jujubes marshmallow chocolate bar sugar plum tart. Lollipop pudding
                  toffee muffin marshmallow powder brownie candy canes biscuit.
                </Clamp>
                <div className="text-small text-muted">23.10.2021</div>
              </NavLink>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row className="g-0 h-auto sh-sm-18">
          <Col xs="12" sm="auto" className="h-100">
            <img src="/img/product/small/product-3.webp" alt="product" className="card-img card-img-horizontal-sm sh-24 h-sm-100 sw-sm-18" />
          </Col>
          <Col xs="12" className="col-sm">
            <Card.Body className="h-100">
              <NavLink to="#" className="d-flex flex-column mb-lg-0 mb-3 mb-lg-0 pe-3">
                <div className="lh-1 mb-3 heading">Spelt Bread</div>
                <Clamp className="text-medium text-muted mb-2" clamp="2">
                  Macaroon muffin apple pie tiramisu. Topping brownie pastry. Tootsie roll tootsie roll bonbon marshmallow tart bonbon soufflé chocolate cake
                  brownie. Cheesecake powder sugar plum cake dragée halvah donut cotton candy. Sweet tiramisu gummi bears gummies wafer cheesecake.
                </Clamp>
                <div className="text-small text-muted">23.10.2021</div>
              </NavLink>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
