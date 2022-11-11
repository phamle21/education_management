import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotificationThumbnail = () => {
  const Content = () => (
    <>
      <Row className="g-0 position-relative">
        <Col xs="auto">
          <img src="/img/profile/profile-9.webp" alt="profile" className="sw-3 me-3 rounded-xl" />
        </Col>
        <Col className="d-flex align-items-center">
          <div className="body-link">Hello, how are you?</div>
        </Col>
      </Row>
    </>
  );
  const notify = () => toast(<Content />, { hideProgressBar: true });
  return (
    <Button variant="outline-primary" onClick={notify}>
      Thumbnail
    </Button>
  );
};

export default NotificationThumbnail;
