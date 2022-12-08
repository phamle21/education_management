import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

const ModalStudentInfo = ({ data }) => {
    return (
        <>
            <Form>
                <Col md="12" className='mb-3'>
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control type="text" />
                </Col>
                <Col md="12" className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                </Col>
                <Col xs="12" className='mb-3'>
                    <Form.Label>Điểm</Form.Label>
                    <Form.Control type="text" />
                </Col>
                <Col xs="12" className='mb-4 mt-2'>
                    <Form.Check type="checkbox" label="Hoàn thành khóa học" id="basicCheckboxRow" />
                </Col>
                <Col xs="12">
                    <Button variant="primary">Save</Button>
                </Col>

            </Form>
        </>
    )
}

export default ModalStudentInfo;