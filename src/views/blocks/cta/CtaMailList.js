import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const CtaMailListFirst = () => {
  return (
    <Card className="text-center">
      <Card.Body>
        <div className="cta-3">Ready to make bread?</div>
        <div className="mb-3 cta-3 text-primary">Join our email list!</div>
        <div className="text-muted mb-3">Cheesecake chocolate carrot cake pie lollipop lemon drops.</div>
        <Row className="gx-2 justify-content-center">
          <Col xs="12" sm="4">
            <div className="d-flex flex-column justify-content-start">
              <div className="text-muted mb-3 mb-sm-0">
                <input type="email" className="form-control" placeholder="E-mail" />
              </div>
            </div>
          </Col>
          <Col xs="12" sm="auto">
            <Button variant="primary" className="btn-icon btn-icon-start">
              <CsLineIcons icon="chevron-right" /> <span>Subscribe</span>
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const CtaMailListSecond = () => {
  return (
    <Card className="text-center">
      <Card.Body>
        <div className="cta-3">Ready to make bread?</div>
        <div className="mb-3 cta-3 text-primary">Join our email list!</div>
        <div className="text-muted mb-3">
          Cheesecake chocolate carrot cake pie lollipop lemon drops toffee lollipop. Oat cake jujubes chupa chups cotton candy sugar plum. Jujubes wafer topping
          biscuit lemon drops jelly-o muffin. Jujubes jelly pastry tart chupa chups. Pudding cake tiramisu biscuit cake cotton candy caramels topping.
        </div>
        <Row className="gx-2 d-flex justify-content-center">
          <Col xs="12" sm="3">
            <div className="d-flex flex-column justify-content-start">
              <div className="text-muted mb-3 mb-sm-0">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
            </div>
          </Col>
          <Col xs="12" sm="3">
            <div className="d-flex flex-column justify-content-start">
              <div className="text-muted mb-3 mb-sm-0">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
            </div>
          </Col>
          <Col xs="12" sm="auto">
            <Button variant="primary" className="btn-icon btn-icon-start">
              <CsLineIcons icon="chevron-right" /> <span>Subscribe</span>
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const CtaMailListThird = () => {
  return (
    <Card className="card w-100 sh-25 sh-sm-19">
      <img src="/img/banner/cta-wide-4.webp" className="card-img h-100" alt="card image" />
      <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
        <div className="cta-3 text-black">Ready to make bread?</div>
        <div className="mb-3 cta-3 text-primary">Join our email list!</div>
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
              <CsLineIcons icon="chevron-right" /> <span>Subscribe</span>
            </Button>
          </Col>
        </Row>
      </div>
    </Card>
  );
};
