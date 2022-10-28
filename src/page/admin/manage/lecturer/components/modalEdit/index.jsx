import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function ModalEdit({ show, onHide, data }) {
    const [formInput, setFormInput] = useState({});

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setFormInput({
            ...formInput, [name]: value
        });
    }

    useEffect(() => {
        setFormInput(data);
    }, [data])

    return (
        <>
            <Modal
                className='modal-custom'
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={onHide}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='modal-custom-title'>Thêm giảng viên</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label className='modal-custom-label'>Họ tên giảng viên</Form.Label>
                            <Form.Control
                                name='name'
                                className='modal-custom-control'
                                placeholder="ReactJS"
                                autoFocus
                                value={formInput['name']}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='modal-custom-label'>Số điện thoại</Form.Label>
                            <Form.Control
                                name='phone'
                                className='modal-custom-control'
                                placeholder="Nguyen Van A"
                                value={formInput['phone']}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='modal-custom-label'>Giới tính</Form.Label>
                            <Form.Control
                                name='gender'
                                className='modal-custom-control'
                                value={formInput['gender']}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='modal-custom-label'>Ngày sinh</Form.Label>
                            <Form.Control
                                name='birthday'
                                className='modal-custom-control'
                                type="date"
                                value={!formInput['birthday'] && ''}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='modal-custom-label'>Email</Form.Label>
                            <Form.Control
                                name='email'
                                className='modal-custom-control'
                                value={formInput['email']}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='modal-custom-label'>Địa chỉ</Form.Label>
                            <Form.Control
                                name='address'
                                className='modal-custom-control'
                                value={formInput['address']}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='modal-custom-btn' variant="secondary" onClick={onHide}>
                        Hủy
                    </Button>
                    <Button className='modal-custom-btn' variant="primary" onClick={onHide}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}