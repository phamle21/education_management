import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ListTimeLogs = () => {
  return (
    <Card>
      <Card.Body className="mb-n2">
        <Row className="g-0 mb-2">
          <Col xs="auto">
            <div className="sw-6 d-inline-block d-flex justify-content-start align-items-center h-100 me-2">
              <div className="text-muted mt-n1 lh-1-25">18:43</div>
            </div>
          </Col>
          <Col xs="auto">
            <div className="sw-2 d-inline-block d-flex justify-content-start align-items-center h-100">
              <div className="sh-3">
                <CsLineIcons icon="circle" className="text-primary align-top" />
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-0 h-100 justify-content-center">
              <div className="d-flex flex-column">
                <div className="text-alternate mt-n1 lh-1-25">New user registiration</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="g-0 mb-2">
          <Col xs="auto">
            <div className="sw-6 d-inline-block d-flex justify-content-start align-items-center h-100 me-2">
              <div className="text-muted mt-n1 lh-1-25">16:25</div>
            </div>
          </Col>
          <Col xs="auto">
            <div className="sw-2 d-inline-block d-flex justify-content-start align-items-center h-100">
              <div className="sh-3">
                <CsLineIcons icon="square" className="text-secondary align-top" />
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-0 h-100 justify-content-center">
              <div className="d-flex flex-column">
                <div className="text-alternate mt-n1 lh-1-25">Product out of stock: Breadstick</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="g-0 mb-2">
          <Col xs="auto">
            <div className="sw-6 d-inline-block d-flex justify-content-start align-items-center h-100 me-2">
              <div className="text-muted mt-n1 lh-1-25">15:10</div>
            </div>
          </Col>
          <Col xs="auto">
            <div className="sw-2 d-inline-block d-flex justify-content-start align-items-center h-100">
              <div className="sh-3">
                <CsLineIcons icon="triangle" className="text-tertiary align-top" />
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-0 h-100 justify-content-center">
              <div className="d-flex flex-column">
                <div className="text-alternate mt-n1 lh-1-25">Category page returned an error</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="g-0 mb-2">
          <Col xs="auto">
            <div className="sw-6 d-inline-block d-flex justify-content-start align-items-center h-100 me-2">
              <div className="text-muted mt-n1 lh-1-25">14:55</div>
            </div>
          </Col>
          <Col xs="auto">
            <div className="sw-2 d-inline-block d-flex justify-content-start align-items-center h-100">
              <div className="sh-3">
                <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-0 h-100 justify-content-center">
              <div className="d-flex flex-column">
                <div className="text-alternate mt-n1 lh-1-25">New sale: Steirer Brot</div>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ListTimeLogs;
