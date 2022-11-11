import apiBase from 'app/axios/apiBase';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from 'recoil';
import { roleListState } from 'store_recoil';

const ModalAddRole = ({show, onHide}) => {

    const [roleName, setRoleName] = useState();

    const [roleDes, setRoleDes] = useState();

    const [roleList, setRoleList] = useRecoilState(roleListState);

    const hanldeSave = () => {
        apiBase.post('/roles', {
            "name": roleName,
            "description": roleDes,
        }).then((res) => {
            setRoleList(res.data.roleList);
            onHide();
        })
        .catch((err) => console.log(err))
    }

    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                <Modal.Title>Thêm Loại Người Dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="mb-4 filled">
                            <CsLineIcons icon="pepper" />
                            <Form.Control
                                autoFocus
                                placeholder='Tên loại người dùng'
                                onChange={(e) => setRoleName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4 filled">
                            <CsLineIcons icon="content" />
                            <Form.Control
                                placeholder='Mô tả loại người dùng'
                                onChange={(e) => setRoleDes(e.target.value)}
                            />
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Hủy
                </Button>
                <Button onClick={() => hanldeSave()}>Lưu</Button>
                </Modal.Footer>
            </Modal> 
        </>
    )
}

export default ModalAddRole;