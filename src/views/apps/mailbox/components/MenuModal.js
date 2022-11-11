import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Card, Modal } from 'react-bootstrap';
import MenuContent from './MenuContent';

const MenuModal = ({ show, onHide }) => {
  const { currentUser } = useSelector((state) => state.auth);

  if (currentUser) {
    const { name, thumb, email } = currentUser;
    return (
      <Modal className="modal-right" show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Row className="g-0 sh-5">
            <Col xs="auto">
              <Card.Img src={thumb} className="rounded-xl sh-5 sw-5" alt={name} />
            </Col>
            <Col>
              <Card.Body className="d-flex flex-row pt-0 pb-0 ps-3 pe-0 h-100 align-items-center justify-content-between">
                <div className="d-flex flex-column">
                  <div>{name}</div>
                  <div className="text-small text-muted">{email}</div>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body>
          <MenuContent />
        </Modal.Body>
      </Modal>
    );
  }

  return <></>;
};
export default MenuModal;
