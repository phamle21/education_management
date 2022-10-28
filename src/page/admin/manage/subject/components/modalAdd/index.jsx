import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import apiBase from '../../../../../../app/axios/apiFormData';


export default function ModalAdd({ show, onHide }) {
    const [selectedImage, setSelectedImage] = useState();
    const [listLecturers, setListLecturers] = useState([]);
    const [formInput, setFormInput] = useState({});
    const [listTypes, setListTypes] = useState([]);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setFormInput({
            ...formInput, [name]: value
        });
    }

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const removeSelectedImage = () => {
        setSelectedImage();
    };

    useEffect(() => {
        apiBase.get("/users", {
            params: {
                type: 'Teacher',
            }
        })
            .catch(err => console.log(err))
            .then(res => {
                setListLecturers([...res.data.data]);
            })
    }, []);

    useEffect(() => {
        apiBase.get("/topics")
            .catch(err => console.log(err))
            .then(res => {
                setListTypes([...res.data.data]);
            })
    }, []);

    const handleSave = () => {
        const formData = new FormData();

        Object.keys(formInput).forEach((key) => {
            formData.append(key, formInput[key])
        })

        formData.append('image', selectedImage);

        apiBase.post("/courses", formData)
            .catch(err => console.log(err))
            .then(res => {
                if (res.data != null) {
                    setFormInput({});
                    setSelectedImage();
                    onHide();
                    toast.success(
                        "Thêm khóa học thành công!",
                        { position: toast.POSITION.BOTTOM_RIGHT },
                        { autoClose: 5000 },
                    );
                }
            })
    }

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
                    <Modal.Title className='modal-custom-title'>Thêm khóa học</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='modal-custom-label'>Tên môn học</Form.Label>
                            <Form.Control
                                className='modal-custom-control'
                                placeholder="ReactJS"
                                autoFocus
                                name='name'
                                value={formInput['name']}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label className='modal-custom-label'>Mô tả ngắn</Form.Label>
                            <Form.Control
                                className='modal-custom-control'
                                placeholder="Khóa học căn bản cho người mới bắt đầu"
                                name='description'
                                value={formInput['description']}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label className='modal-custom-label'>Hình minh họa</Form.Label>
                            <Form.Control
                                className='modal-custom-control'
                                type='file'
                                onChange={imageChange}
                                accept="image/*"
                                // files={selectedImage}
                                name='image'
                                value={formInput['image']}
                            />
                            {/* <Form.File
                                type="file"
                                className="modal-custom-control"
                                id="inputGroupFile01"
                                name='image'
                                onChange={(e) => setFileName(e.target.files[0].name)}
                                value={formInput['image']}
                                custom
                            /> */}
                        </Form.Group>
                        {selectedImage && (
                            <div>
                                <img
                                    src={URL.createObjectURL(selectedImage)}
                                    alt="Thumb"
                                />
                                {/* <button onClick={removeSelectedImage}>
                                    Remove This Image
                                </button> */}
                            </div>
                        )}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                            <Form.Label className='modal-custom-label'>Giảng viên</Form.Label>
                            <Form.Select className='modal-custom-control' name='user_id' onChange={handleInputChange}>
                                {listLecturers && listLecturers.map((lecturer, i) => (
                                    <option key={i} value={lecturer.id}>{lecturer.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                            <Form.Label className='modal-custom-label'>Loại</Form.Label>
                            <Form.Select className='modal-custom-control' name='topic_id' onChange={handleInputChange}>
                                {listTypes && listTypes.map((type, i) => (
                                    <option key={i} value={type.id}>{type.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                            <Form.Label className='modal-custom-label'>Ngày bắt đầu</Form.Label>
                            <Form.Control
                                className='modal-custom-control'
                                type="date"
                                name='start'
                                value={formInput['start']}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                            <Form.Label className='modal-custom-label'>Ngày kết thúc</Form.Label>
                            <Form.Control
                                className='modal-custom-control'
                                type="date"
                                name='end'
                                value={formInput['end']}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                            <Form.Label className='modal-custom-label'>Số lượng học viên</Form.Label>
                            <Form.Control
                                className='modal-custom-control'
                                type="number"
                                name='quantity'
                                value={formInput['quantity']}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
                            <Form.Label className='modal-custom-label'>Học phí</Form.Label>
                            <Form.Control
                                className='modal-custom-control'
                                type="number"
                                name='tuition'
                                value={formInput['tuition']}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea9"
                        >
                            <Form.Label className='modal-custom-label'>Nội dung chính</Form.Label>
                            <Form.Control
                                className='modal-custom-control'
                                as="textarea"
                                rows={4}
                                name='content'
                                value={formInput['content']}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='modal-custom-btn' variant="secondary" onClick={onHide}>
                        Hủy
                    </Button>
                    <Button className='modal-custom-btn' variant="primary" onClick={() => handleSave()}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}