import React from 'react';
import { Row, Col } from 'react-bootstrap';

const RespondContentContainer = ({ user, children }) => {
  const { name, thumb } = user;

  return (
    <div className="mb-2 card-content">
      <Row className="g-2">
        <Col xs="auto" className="d-flex align-items-end">
          <div className="sw-5 sh-5 mb-1 d-inline-block position-relative">
            <img src={thumb} className="img-fluid rounded-xl chat-profile" alt={name} />
          </div>
        </Col>
        <Col className="d-flex align-items-end content-container">{children}</Col>
      </Row>
    </div>
  );
};
export default RespondContentContainer;
