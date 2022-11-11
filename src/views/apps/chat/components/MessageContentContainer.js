import React from 'react';
import { Row, Col } from 'react-bootstrap';

const MessageContentContainer = ({ user, children }) => {
  const { name, thumb } = user;
  return (
    <div className="mb-2 card-content">
      <Row className="g-2">
        <Col xs="auto" className="d-flex align-items-end order-1">
          <div className="sw-5 sh-5 mb-1 d-inline-block position-relative">
            <img src={thumb} className="img-fluid rounded-xl" alt={name} />
          </div>
        </Col>
        <Col className="d-flex justify-content-end align-items-end content-container">{children}</Col>
      </Row>
    </div>
  );
};
export default MessageContentContainer;
