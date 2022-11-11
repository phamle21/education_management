import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';

const ListUsers = () => {
  return (
    <Card>
      <Card.Body className="mb-n2">
        <Row className="g-0 sh-6 mb-2">
          <Col xs="auto">
            <img src="/img/profile/profile-9.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
          </Col>
          <Col>
            <div className="d-flex flex-row pt-0 pb-0 ps-3 pe-0 h-100 align-items-center justify-content-between">
              <div className="d-flex flex-column">
                <div>Blaine Cottrell</div>
                <div className="text-small text-muted">Project Manager</div>
              </div>
              <div className="d-flex">
                <Button variant="outline-primary" size="sm" className="ms-1">
                  Follow
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="g-0 sh-6 mb-2">
          <Col xs="auto">
            <img src="/img/profile/profile-9.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
          </Col>
          <Col>
            <div className="d-flex flex-row pt-0 pb-0 ps-3 pe-0 h-100 align-items-center justify-content-between">
              <div className="d-flex flex-column">
                <div>Cherish Kerr</div>
                <div className="text-small text-muted">Development Lead</div>
              </div>
              <div className="d-flex">
                <Button variant="outline-primary" size="sm" className="ms-1">
                  Follow
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="g-0 sh-6 mb-2">
          <Col xs="auto">
            <img src="/img/profile/profile-9.webp" className="card-img rounded-xl sh-6 sw-6" alt="thumb" />
          </Col>
          <Col>
            <div className="d-flex flex-row pt-0 pb-0 ps-3 pe-0 h-100 align-items-center justify-content-between">
              <div className="d-flex flex-column">
                <div>Kirby Peters</div>
                <div className="text-small text-muted">Accounting</div>
              </div>
              <div className="d-flex">
                <Button variant="outline-primary" size="sm" className="ms-1">
                  Follow
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ListUsers;
