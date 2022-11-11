import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

export const TabularDataSchedule = () => {
  return (
    <div className="mb-n2">
      <Card className="mb-2 sh-16 sh-md-10">
        <Row className="g-0 h-100">
          <Col md="7" className="d-flex align-items-start align-items-md-center card-body pt-md-0 pb-0 pe-md-0">
            <label className="form-check custom-icon mb-0 checked-line-through checked-opacity-75 w-100 d-flex">
              <input type="checkbox" className="form-check-input" defaultChecked />
              <span className="form-check-label d-flex align-items-center">
                <span className="content">
                  <span className="mb-0 lh-1">Create Wireframes</span>
                </span>
              </span>
            </label>
          </Col>
          <Col md="5">
            <Card.Body className="pt-0 pb-md-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col xs="9" md="11" className="d-flex flex-column text-muted text-medium">
                  <div>10:00</div>
                  <div>15.09.2021</div>
                </Col>
                <Col xs="3" md="1" className="d-flex justify-content-end align-self-center">
                  <Button size="sm" variant="foreground" className="btn-icon btn-icon-only hover-outline">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2 sh-16 sh-md-10">
        <Row className="g-0 h-100">
          <Col md="7" className="d-flex align-items-start align-items-md-center card-body pt-md-0 pb-0 pe-md-0">
            <label className="form-check custom-icon mb-0 checked-line-through checked-opacity-75 w-100 d-flex">
              <input type="checkbox" className="form-check-input" defaultChecked />
              <span className="form-check-label d-flex align-items-center">
                <span className="content">
                  <span className="mb-0 lh-1">Business Lunch</span>
                </span>
              </span>
            </label>
          </Col>
          <Col md="5">
            <Card.Body className="pt-0 pb-md-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col xs="9" md="11" className="d-flex flex-column text-muted text-medium">
                  <div>12:00</div>
                  <div>15.09.2021</div>
                </Col>
                <Col xs="3" md="1" className="d-flex justify-content-end align-self-center">
                  <Button size="sm" variant="foreground" className="btn-icon btn-icon-only hover-outline">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2 sh-16 sh-md-10">
        <Row className="g-0 h-100">
          <Col md="7" className="d-flex align-items-start align-items-md-center card-body pt-md-0 pb-0 pe-md-0">
            <label className="form-check custom-icon mb-0 checked-line-through checked-opacity-75 w-100 d-flex">
              <input type="checkbox" className="form-check-input" />
              <span className="form-check-label d-flex align-items-center">
                <span className="content">
                  <span className="mb-0 lh-1">Training with the Team</span>
                </span>
              </span>
            </label>
          </Col>
          <Col md="5">
            <Card.Body className="pt-0 pb-md-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col xs="9" md="11" className="d-flex flex-column text-muted text-medium">
                  <div>14:30</div>
                  <div>15.09.2021</div>
                </Col>
                <Col xs="3" md="1" className="d-flex justify-content-end align-self-center">
                  <Button size="sm" variant="foreground" className="btn-icon btn-icon-only hover-outline">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2 sh-16 sh-md-10">
        <Row className="g-0 h-100">
          <Col md="7" className="d-flex align-items-start align-items-md-center card-body pt-md-0 pb-0 pe-md-0">
            <label className="form-check custom-icon mb-0 checked-line-through checked-opacity-75 w-100 d-flex">
              <input type="checkbox" className="form-check-input" />
              <span className="form-check-label d-flex align-items-center">
                <span className="content">
                  <span className="mb-0 lh-1">Gym</span>
                </span>
              </span>
            </label>
          </Col>
          <Col md="5">
            <Card.Body className="pt-0 pb-md-0 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col xs="9" md="11" className="d-flex flex-column text-muted text-medium">
                  <div>19:00</div>
                  <div>15.09.2021</div>
                </Col>
                <Col xs="3" md="1" className="d-flex justify-content-end align-self-center">
                  <Button size="sm" variant="foreground" className="btn-icon btn-icon-only hover-outline">
                    <CsLineIcons icon="more-horizontal" />
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
