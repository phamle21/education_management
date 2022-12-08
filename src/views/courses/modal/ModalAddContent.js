import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

const ModalAddContent = ({ data }) => {
    return (
        <>
            <Form>
                <Col md="12" className='mb-3'>
                    <Form.Label>Tên bài</Form.Label>
                    <Form.Control type="text" />
                </Col>
                <Col md="12" className='mb-3'>
                    <Form.Label>Nội dung</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                </Col>
                <Col xs="12">
                    <Button variant="primary">Save</Button>
                </Col>

            </Form>
        </>
    )
}

export default ModalAddContent;