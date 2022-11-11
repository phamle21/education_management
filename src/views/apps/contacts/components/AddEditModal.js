import React, { useState, useEffect, useRef } from 'react';
import { Button, Form, CloseButton, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Select from 'react-select';

const AddEditModal = ({ tableInstance, addItem, editItem }) => {
  const { selectedFlatRows, data, setIsOpenAddEditModal, isOpenAddEditModal, setIsOpenDeleteConfirmModal } = tableInstance;
  const emptyItem = { id: data.length + 1, thumb: '', name: '', position: '', email: '', phone: '', group: '' };
  const [selectedItem, setSelectedItem] = useState(emptyItem);
  const refFileUpload = useRef(null);

  useEffect(() => {
    if (isOpenAddEditModal && selectedFlatRows.length === 1) {
      setSelectedItem(selectedFlatRows[0].original);
    } else {
      setSelectedItem(emptyItem);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenAddEditModal, selectedFlatRows]);

  const changeName = (event) => {
    setSelectedItem({ ...selectedItem, name: event.target.value });
  };
  const changePosition = (event) => {
    setSelectedItem({ ...selectedItem, position: event.target.value });
  };
  const changeEmail = (event) => {
    setSelectedItem({ ...selectedItem, email: event.target.value });
  };
  const changePhone = (event) => {
    setSelectedItem({ ...selectedItem, phone: event.target.value });
  };
  const changeGroup = (selected) => {
    setSelectedItem({ ...selectedItem, group: selected.value });
  };

  const onThumbChangeClick = () => {
    if (refFileUpload) {
      refFileUpload.current.dispatchEvent(new MouseEvent('click'));
    }
  };
  const changeThumb = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        setSelectedItem({ ...selectedItem, thumb: loadEvent.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  const saveItem = () => {
    if (selectedFlatRows.length === 1) {
      editItem({ item: selectedItem });
    } else {
      addItem({ item: selectedItem });
    }
    setIsOpenAddEditModal(false);
  };
  return (
    <>
      <Modal className="modal-right" show={isOpenAddEditModal} onHide={() => setIsOpenAddEditModal(false)}>
        <CloseButton className="position-absolute e-2 t-2 z-index-1" onClick={() => setIsOpenAddEditModal(false)} />
        <Modal.Body className="d-flex flex-column">
          <>
            <div className="mb-3 mx-auto position-relative" id="imageUpload">
              <img
                src={selectedItem ? selectedItem.thumb : '/img/profile/profile-11.webp'}
                alt="user"
                className="rounded-xl border border-separator-light border-4 sw-11 sh-11"
                id="contactThumbModal"
              />
              <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded-xl s-0 b-0" onClick={onThumbChangeClick}>
                <CsLineIcons icon="upload" className="text-alternate" />
              </Button>
              <Form.Control type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
            </div>
            <div className="mb-3 filled w-100 d-flex flex-column">
              <CsLineIcons icon="user" />
              <Form.Control type="text" placeholder="Name" defaultValue={selectedItem ? selectedItem.name : ''} onChange={changeName} />
            </div>
            <div className="mb-3 filled w-100 d-flex flex-column">
              <CsLineIcons icon="suitcase" />
              <Form.Control type="text" placeholder="Position" defaultValue={selectedItem ? selectedItem.position : ''} onChange={changePosition} />
            </div>
            <div className="mb-3 filled w-100 d-flex flex-column">
              <CsLineIcons icon="email" />
              <Form.Control type="text" placeholder="Email" defaultValue={selectedItem ? selectedItem.email : ''} onChange={changeEmail} />
            </div>
            <div className="mb-3 filled w-100 d-flex flex-column">
              <CsLineIcons icon="phone" />
              <Form.Control type="text" placeholder="Phone" defaultValue={selectedItem ? selectedItem.phone : ''} onChange={changePhone} />
            </div>
            <div className="mb-3 filled w-100">
              <CsLineIcons icon="diagram-1" />

              <Select
                classNamePrefix="react-select"
                isSearchable={false}
                options={[
                  { value: 'Work', label: 'Work' },
                  { value: 'Personal', label: 'Personal' },
                ]}
                value={{ value: selectedItem.group, label: selectedItem.group }}
                onChange={changeGroup}
                placeholder=""
              />
            </div>
          </>
          <Modal.Footer className="border-0">
            {selectedFlatRows.length === 1 && (
              <OverlayTrigger delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Delete</Tooltip>} placement="top">
                <Button variant="outline-primary" className="btn-icon btn-icon-only" onClick={() => setIsOpenDeleteConfirmModal(true)}>
                  <CsLineIcons icon="bin" />
                </Button>
              </OverlayTrigger>
            )}
            <Button className="btn-icon btn-icon-end" onClick={saveItem}>
              {selectedFlatRows.length === 1 ? (
                <>
                  <span>Save</span> <CsLineIcons icon="check" />
                </>
              ) : (
                <>
                  <span>Add</span> <CsLineIcons icon="plus" />
                </>
              )}
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default AddEditModal;
