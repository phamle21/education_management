import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ListUserButtons = () => {
  return (
    <Card>
      <Card.Body className="mb-n3 border-last-none">
        <div className="border-bottom border-separator-light mb-2 pb-2">
          <Row className="g-0 sh-6">
            <Col xs="auto">
              <img src="/img/profile/profile-6.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
            </Col>
            <Col>
              <div className="d-flex flex-row pt-0 pb-0 ps-3 pe-0 h-100 align-items-center justify-content-between">
                <div className="d-flex flex-column">
                  <div>Joisse Kaycee</div>
                  <div className="text-small text-muted">UX Designer</div>
                </div>
                <div className="d-flex">
                  <Button variant="outline-secondary" size="sm" className="ms-1">
                    Edit
                  </Button>
                  <Button variant="outline-secondary" size="sm" className="btn-icon btn-icon-only ms-1">
                    <CsLineIcons icon="more-vertical" />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="border-bottom border-separator-light mb-2 pb-2">
          <Row className="g-0 sh-6">
            <Col xs="auto">
              <img src="/img/profile/profile-6.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
            </Col>
            <Col>
              <div className="d-flex flex-row pt-0 pb-0 ps-3 pe-0 h-100 align-items-center justify-content-between">
                <div className="d-flex flex-column">
                  <div>Joisse Kaycee</div>
                  <div className="text-small text-muted">UX Designer</div>
                </div>
                <div className="d-flex">
                  <Button variant="outline-secondary" size="sm" className="ms-1">
                    Edit
                  </Button>
                  <Button variant="outline-secondary" size="sm" className="btn-icon btn-icon-only ms-1">
                    <CsLineIcons icon="more-vertical" />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="border-bottom border-separator-light mb-2 pb-2">
          <Row className="g-0 sh-6">
            <Col xs="auto">
              <img src="/img/profile/profile-6.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
            </Col>
            <Col>
              <div className="d-flex flex-row pt-0 pb-0 ps-3 pe-0 h-100 align-items-center justify-content-between">
                <div className="d-flex flex-column">
                  <div>Joisse Kaycee</div>
                  <div className="text-small text-muted">UX Designer</div>
                </div>
                <div className="d-flex">
                  <Button variant="outline-secondary" size="sm" className="ms-1">
                    Edit
                  </Button>
                  <Button variant="outline-secondary" size="sm" className="btn-icon btn-icon-only ms-1">
                    <CsLineIcons icon="more-vertical" />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ListUserButtons;
