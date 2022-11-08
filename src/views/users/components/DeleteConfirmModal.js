import React from 'react';
import { useIntl } from 'react-intl';

import { Button, Modal } from 'react-bootstrap';

const DeleteConfirmModal = ({ tableInstance, deleteItem }) => {
  const { formatMessage: f } = useIntl();

  const { selectedFlatRows, setIsOpenAddEditModal, isOpenDeleteConfirmModal, setIsOpenDeleteConfirmModal } = tableInstance;

  const onDeleteConfirm = () => {
    setIsOpenAddEditModal(false);
    setIsOpenDeleteConfirmModal(false);
    deleteItem(selectedFlatRows.map((x) => x.original));
  };

  return (
    <Modal centered className="modal-close-out" show={isOpenDeleteConfirmModal} onHide={() => setIsOpenDeleteConfirmModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{f({ id: 'user.model_delete_title' })}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span className="fw-bold">{selectedFlatRows.length === 1 ? selectedFlatRows[0].original.name : `${selectedFlatRows.length} ${f({ id: 'user.model_delete_item' })}`}</span>{' '}
        <span>{f({ id: 'user.model_delete_content' })}</span>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setIsOpenDeleteConfirmModal(false)}>{f({ id: 'user.model_delete_no' })}</Button>
        <Button variant="outline-primary" onClick={onDeleteConfirm}>
          {f({ id: 'user.model_delete_yes' })}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmModal;
