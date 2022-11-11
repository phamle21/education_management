import React from 'react';
import { Modal } from 'react-bootstrap';
import MenuContent from './MenuContent';

const MenuModal = ({ show, onHide }) => {
  return (
    <Modal className="modal-right" show={show} onHide={onHide}>
      <Modal.Header closeButton>Tasks</Modal.Header>
      <Modal.Body>
        <MenuContent />
      </Modal.Body>
    </Modal>
  );
};
export default MenuModal;
