import React, { useState, useEffect, useRef } from 'react';
import { Button, Form, CloseButton, Modal, OverlayTrigger, Tooltip, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Select from 'react-select';
import { useRecoilState } from 'recoil';
import { roleListState } from 'recoil_store';
import { useIntl } from 'react-intl';
import apiBase from 'app/axios/apiBase';
import Swal from 'sweetalert2';

const AddEditModal = ({ tableInstance, addItem, editItem }) => {

  const { formatMessage: f } = useIntl();

  const { selectedFlatRows, setIsOpenAddEditModal, isOpenAddEditModal, setIsOpenDeleteConfirmModal } = tableInstance;

  const emptyItem = useState({ id: '', avatar: '', name: '', status: 'Active', email: '', phone: '', role: '' });

  const [selectedItem, setSelectedItem] = useState(emptyItem);

  const refFileUpload = useRef(null);

  const [roleList, setRoleList] = useRecoilState(roleListState);

  const [optionList, setOptionList] = useState([]);
  const [selectOption, setSelectOption] = useState();

  const [checkSubmit, setCheckSubmit] = React.useState(true);

  const defaultMess = { avatar: '', name: '', status: '', email: '', phone: '', role: '' };
  const [errors, setErrors] = React.useState(JSON.parse(JSON.stringify(defaultMess)));
  const [warning, setWarning] = React.useState(JSON.parse(JSON.stringify(defaultMess)));
  const [success, setSuccess] = React.useState(JSON.parse(JSON.stringify(defaultMess)));

  useEffect(() => {

    if (roleList.length < 1) {
      apiBase.get('/roles', { params: { type: 'All' } })
        .then(res => {

          setRoleList(res.data.data)
          const arrTemp = [];
          res.data.data.forEach(item => {
            arrTemp.push({
              value: item.id,
              label: item.name,
            })
          })
          setOptionList(arrTemp);

        });
    } else {

      const arrTemp = [];
      roleList.forEach(item => {
        arrTemp.push({
          value: item.id,
          label: item.name,
        })
      })
      setOptionList(arrTemp);

    }

  }, []);

  useEffect(() => {
    if (isOpenAddEditModal && selectedFlatRows.length === 1) {
      const objTemp = JSON.parse(JSON.stringify(selectedFlatRows[0].original));
      objTemp.role = `role_${objTemp.role}`

      setSelectedItem(objTemp);
      setSelectOption({ value: `role_${selectedFlatRows[0].original.role}`, label: selectedFlatRows[0].original.role });

    } else {
      setSelectedItem(emptyItem);
    }

    return () => { };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenAddEditModal, selectedFlatRows]);

  const checkPhoneField = (value) => {
    const data = {
      'type': 'phone',
      'value': value
    }
    let checkInvalid = false;
    setSuccess({ ...success, phone: '' });

    if (!(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(value)) || value.length < 1) {
      setErrors({ ...errors, phone: f({ id: 'user.check.err.phone' }) });
      setCheckSubmit(false);
      checkInvalid = true;
    } else {
      setErrors({ ...errors, phone: '' });
      setWarning({ ...warning, phone: f({ id: 'user.check.warning.phone' }) });
    }

    if (!checkInvalid) {
      apiBase.post('/users/check-account', JSON.stringify(data))
        .then(res => {
          if (res.data.status === "phone_exists") {
            // Set err phone
            setErrors({ ...errors, phone: f({ id: 'user.check.err.phone_exists' }) });
            setSuccess({ ...success, phone: '' });
            setWarning({ ...warning, phone: '' });

            setCheckSubmit(false)
          } else {
            setErrors({ ...errors, phone: '' });
            setWarning({ ...warning, phone: '' });
            setSuccess({ ...success, phone: f({ id: 'user.check.success.phone' }) });
            setCheckSubmit(true)
          }

        })
        .catch(err => Swal.fire({
          title: 'Error!',
          html: err,
          icon: 'error'
        }))

    }
  }

  const checkEmailField = (value) => {
    const data = {
      'type': 'email',
      'value': value
    }
    let checkInvalid = false;
    setSuccess({ ...success, email: '' });

    if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) || value.length < 1) {
      setErrors({ ...errors, email: f({ id: 'user.check.err.email' }) });
      setCheckSubmit(false);
      checkInvalid = true;
    } else {
      setErrors({ ...errors, email: '' });
      setWarning({ ...warning, email: f({ id: 'user.check.warning.email' }) });
    }

    if (!checkInvalid) {
      apiBase.post('/users/check-account', JSON.stringify(data))
        .then(res => {
          if (res.data.status === "email_exists") {

            // Set err email
            setErrors({ ...errors, email: f({ id: 'user.check.err.email_exists' }) });
            setSuccess({ ...success, email: '' });
            setWarning({ ...warning, email: '' });
            setCheckSubmit(false)
          } else {
            setErrors({ ...errors, email: '' });
            setWarning({ ...warning, email: '' });
            setSuccess({ ...success, email: f({ id: 'user.check.success.email' }) });
            setCheckSubmit(true)
          }

        })
        .catch(err => Swal.fire({
          title: 'Error!',
          html: err,
          icon: 'error'
        }))

    }
  }

  const changeName = (event) => {
    const regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    if (!regex.test(event.target.value)) {
      setErrors({ ...errors, name: f({ id: 'user.check.err.name' }) });
      setSuccess({ ...success, name: '' });
      setCheckSubmit(false)
    } else {
      setErrors({ ...errors, name: '' });
      setSuccess({ ...success, name: f({ id: 'user.check.success.name' }) });
      setCheckSubmit(true)
    }
    setSelectedItem({ ...selectedItem, name: event.target.value });
  };
  const changeEmail = (event) => {
    checkEmailField(event.target.value);
    setSelectedItem({ ...selectedItem, email: event.target.value });
  };
  const changePhone = (event) => {
    checkPhoneField(event.target.value);
    setSelectedItem({ ...selectedItem, phone: event.target.value });
  };
  const changeRole = (selected) => {
    setSelectOption(selected)
    setSelectedItem({ ...selectedItem, role: selectOption.value });
  };
  const changeStatus = (event) => {
    setSelectedItem({ ...selectedItem, status: event.target.value });
  }

  const onThumbChangeClick = () => {
    if (refFileUpload) {
      refFileUpload.current.dispatchEvent(new MouseEvent('click'));
    }
  };
  const changeThumb = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        setSelectedItem({ ...selectedItem, avatar: loadEvent.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  const saveItem = () => {
    let check = true;

    if (!selectedItem.avatar || !selectedItem.name || !selectedItem.status || !selectedItem.email || !selectedItem.phone || !selectedItem.role) {
      check = false;
    }

    const objTemp = JSON.parse(JSON.stringify(defaultMess));

    if (!selectedItem.avatar) {
      objTemp.avatar = f({ id: 'user.check.err.avatar' });
    }
    if (!selectedItem.name) {
      objTemp.name = f({ id: 'user.check.err.name' });
    }
    if (!selectedItem.status) {
      objTemp.status = f({ id: 'user.check.err.status' });
    }
    if (!selectedItem.email) {
      objTemp.email = f({ id: 'user.check.err.email' });
    }
    if (!selectedItem.phone) {
      objTemp.phone = f({ id: 'user.check.err.phone' });
    }
    if (!selectedItem.role) {
      objTemp.role = f({ id: 'user.check.err.roles' });
    }

    setErrors(objTemp);

    if (checkSubmit && check && selectedItem) {
      if (selectedFlatRows.length === 1) {
        editItem({ item: selectedItem });
      } else {
        addItem({ item: selectedItem });
      }
      setIsOpenAddEditModal(false);
    } else {
      Swal.fire({
        title: f({ id: 'user.submit_false_title' }),
        html: f({ id: 'user.submit_false_html' }),
        icon: 'warning'
      })
    }
  };

  return (
    <>
      <Modal className="modal-right" show={isOpenAddEditModal} onHide={() => setIsOpenAddEditModal(false)}>
        <CloseButton className="position-absolute e-2 t-2 z-index-1" onClick={() => setIsOpenAddEditModal(false)} />
        <Modal.Body className="d-flex flex-column">
          <>
            <div className="mb-3 mx-auto position-relative" id="imageUpload">
              <img
                src={selectedItem ? selectedItem.avatar : ''}
                alt="user"
                className="rounded-xl border border-separator-light border-4 sw-11 sh-11"
                id="contactThumbModal"
              />
              {errors.avatar.length > 0 && <span className="text-danger ms-2">{errors.avatar}</span>}
              {warning.avatar.length > 0 && <span className="text-warning ms-2">{warning.avatar}</span>}
              {success.avatar.length > 0 && <span className="text-success ms-2">{success.avatar}</span>}


              <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded-xl s-0 b-0" onClick={onThumbChangeClick}>
                <CsLineIcons icon="upload" className="text-alternate" />
              </Button>
              <Form.Control required type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
            </div>
            <div className="mb-3 filled w-100 d-flex flex-column">
              <ToggleButtonGroup type="radio" className="d-block" name="buttonOptions2" value={selectedItem ? selectedItem.status : "Active"}>
                <ToggleButton id="tbg-radio-3" onChange={changeStatus} value="Active" variant="outline-primary">
                  Active
                </ToggleButton>
                <ToggleButton id="tbg-radio-4" onChange={changeStatus} value="Inactive" variant="outline-secondary">
                  Inactive
                </ToggleButton>
              </ToggleButtonGroup>
              {errors.status.length > 0 && <span className="text-danger ms-2">{errors.status}</span>}
              {warning.status.length > 0 && <span className="text-warning ms-2">{warning.status}</span>}
              {success.status.length > 0 && <span className="text-success ms-2">{success.status}</span>}

            </div>
            <div className="mb-3 filled w-100 d-flex flex-column">
              <CsLineIcons icon="user" />
              <Form.Control required type="text" placeholder="Name" defaultValue={selectedItem ? selectedItem.name : ''} onChange={changeName} />
              {errors.name.length > 0 && <span className="text-danger ms-2">{errors.name}</span>}
              {warning.name.length > 0 && <span className="text-warning ms-2">{warning.name}</span>}
              {success.name.length > 0 && <span className="text-success ms-2">{success.name}</span>}

            </div>
            <div className="mb-3 filled w-100">
              <CsLineIcons icon="diagram-1" />

              <Select
                classNamePrefix="react-select"
                isSearchable={false}
                options={optionList}
                value={selectOption}
                onChange={changeRole}
                placeholder=""
              />
              {errors.role.length > 0 && <span className="text-danger ms-2">{errors.role}</span>}
              {warning.role.length > 0 && <span className="text-warning ms-2">{warning.role}</span>}
              {success.role.length > 0 && <span className="text-success ms-2">{success.role}</span>}

            </div>
            <div className="mb-3 filled w-100 d-flex flex-column">
              <CsLineIcons icon="email" />
              <Form.Control required type="text" placeholder="Email" defaultValue={selectedItem ? selectedItem.email : ''} onChange={changeEmail} />
              {errors.email.length > 0 && <span className="text-danger ms-2">{errors.email}</span>}
              {warning.email.length > 0 && <span className="text-warning ms-2">{warning.email}</span>}
              {success.email.length > 0 && <span className="text-success ms-2">{success.email}</span>}

            </div>
            <div className="mb-3 filled w-100 d-flex flex-column">
              <CsLineIcons icon="phone" />
              <Form.Control required type="text" placeholder="Phone" defaultValue={selectedItem ? selectedItem.phone : ''} onChange={changePhone} />
              {errors.phone.length > 0 && <span className="text-danger ms-2">{errors.phone}</span>}
              {warning.phone.length > 0 && <span className="text-warning ms-2">{warning.phone}</span>}
              {success.phone.length > 0 && <span className="text-success ms-2">{success.phone}</span>}

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
