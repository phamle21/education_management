import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ListIconsApart = () => {
  return (
    <div className="mb-n2">
      <Card className="mb-2">
        <Row className="g-0 sh-10">
          <Col xs="auto">
            <div className="sw-9 sh-10 d-inline-block d-flex justify-content-center align-items-center">
              <CsLineIcons icon="cupcake" className="text-primary" />
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column ps-0 pt-0 pb-0 h-100 justify-content-center">
              <div className="d-flex flex-column">
                <div className="text-alternate">Melonpan</div>
                <div className="text-small text-muted">Snaps muffin macaroon.</div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row className="g-0 sh-10">
          <Col xs="auto">
            <div className="sw-9 sh-10 d-inline-block d-flex justify-content-center align-items-center">
              <CsLineIcons icon="radish" className="text-primary" />
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column ps-0 pt-0 pb-0 h-100 justify-content-center">
              <div className="d-flex flex-column">
                <div className="text-alternate">Cholermüs</div>
                <div className="text-small text-muted">Brownie ice cream marshmallow topping.</div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
      <Card className="mb-2">
        <Row className="g-0 sh-10">
          <Col xs="auto">
            <div className="sw-9 sh-10 d-inline-block d-flex justify-content-center align-items-center">
              <CsLineIcons icon="pear" className="text-primary" />
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column ps-0 pt-0 pb-0 h-100 justify-content-center">
              <div className="d-flex flex-column">
                <div className="text-alternate">Himbasha</div>
                <div className="text-small text-muted">Sugar plum gummi bears jujubes.</div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ListIconsApart;
