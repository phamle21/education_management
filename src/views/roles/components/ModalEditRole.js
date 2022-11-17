import apiBase from 'app/axios/apiBase';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from 'recoil';
import { editRoleState, roleListState } from 'recoil_store';
import Swal from 'sweetalert2';

const ModalEditRole = ({ show, onHide, data }) => {

    const [editRole, setEditRole] = useRecoilState(editRoleState);

    const [roleList, setRoleList] = useRecoilState(roleListState);

    const handleEdit = () => {
        apiBase.patch(`/roles/${data.id}`, {
            name: editRole.name,
            description: editRole.description,
        }).then(res => {
            if (res.data.status === 'success') {
                setRoleList(res.data.roleList);
                Swal.fire('Success', '', 'success');
            } else {
                Swal.fire('Error', '', 'error');
            }
            onHide();
        })
    }

    const handleDelete = () => {
        apiBase.delete(`/roles/${data.id}`).then(res => {
            if (res.data.status === 'success') {
                setRoleList(res.data.roleList);
                Swal.fire('Success', '', 'success');
            } else {
                Swal.fire('Error', '', 'error');
            }
            onHide();
        })
    }

    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Cập Nhật Loại Người Dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="mb-4 filled">
                            <CsLineIcons icon="pepper" />
                            <Form.Control
                                autoFocus
                                value={editRole && editRole.name}
                                // placeholder='Tên loại người dùng'
                                onChange={(e) => setEditRole({ ...editRole, name: e.target.value })}
                            />
                        </div>
                        <div className="mb-4 filled">
                            <CsLineIcons icon="content" />
                            <Form.Control
                                value={editRole && editRole.description}
                                placeholder='Mô tả loại người dùng'
                                onChange={(e) => setEditRole({ ...editRole, description: e.target.value })}
                            />
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Hủy
                    </Button>
                    <Button onClick={handleDelete} variant="danger">
                        Xóa
                    </Button>
                    <Button onClick={handleEdit}>Lưu</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalEditRole;