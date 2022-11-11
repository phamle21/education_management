import React from 'react';
import { Card, Col, Row, Badge } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ListIcons = () => {
  return (
    <Card>
      <Card.Body className="mb-n2">
        <Row className="g-0 sh-5 mb-2">
          <Col xs="auto">
            <div className="sh-5 d-inline-block d-flex justify-content-center align-items-center">
              <CsLineIcons icon="cupcake" className="text-primary" />
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-row pt-0 pb-0 ps-3 pe-0 h-100 align-items-center justify-content-between">
              <div className="d-flex flex-column">
                <div>Melonpan</div>
              </div>
              <div className="d-flex">
                <Badge bg="outline-secondary">200 gr</Badge>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="g-0 sh-5 mb-2">
          <Col xs="auto">
            <div className="sh-5 d-inline-block d-flex justify-content-center align-items-center">
              <CsLineIcons icon="radish" className="text-primary" />
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-row pt-0 pb-0 ps-3 pe-0 h-100 align-items-center justify-content-between">
              <div className="d-flex flex-column">
                <div>Cholermüs</div>
              </div>
              <div className="d-flex">
                <Badge bg="outline-secondary">100 gr</Badge>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="g-0 sh-5 mb-2">
          <Col xs="auto">
            <div className="sh-5 d-inline-block d-flex justify-content-center align-items-center">
              <CsLineIcons icon="pear" className="text-primary" />
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-row pt-0 pb-0 ps-3 pe-0 h-100 align-items-center justify-content-between">
              <div className="d-flex flex-column">
                <div>Himbasha</div>
              </div>
              <div className="d-flex">
                <Badge bg="outline-secondary">250 gr</Badge>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ListIcons;
