import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function ModalAdd({ show, onHide }) {
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
                    <Modal.Title className='modal-custom-title'>Thêm môn học</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='modal-custom-label'>Tên môn học</Form.Label>
                            <Form.Control
                                className='modal-custom-control'
                                placeholder="ReactJS"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label className='modal-custom-label'>Giảng viên</Form.Label>
                            <Form.Control
                                className='modal-custom-control'
                                placeholder="Nguyen Van A"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label className='modal-custom-label'>Ngày bắt đầu</Form.Label>
                            <Form.Control
                                className='modal-custom-control'
                                type="date"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                            <Form.Label className='modal-custom-label'>Ngày kết thúc</Form.Label>
                            <Form.Control
                                className='modal-custom-control'
                                type="date"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea5"
                        >
                            <Form.Label className='modal-custom-label'>Mô tả</Form.Label>
                            <Form.Control className='modal-custom-control' as="textarea" rows={4} />
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