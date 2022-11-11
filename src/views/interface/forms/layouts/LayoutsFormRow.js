import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const LayoutsFormRow = () => {
  return (
    <Form>
      <Row className="g-3">
        <Col md="6">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Col>
        <Col md="6">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Col>
        <Col xs="12">
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" rows={2} />
        </Col>
        <Col md="6">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" />
        </Col>
        <Col md="4">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" />
        </Col>
        <Col md="2">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" />
        </Col>
        <Col xs="12">
          <Form.Check type="checkbox" label="Check me out" id="basicCheckboxRow" />
        </Col>
        <Col xs="12">
          <Button variant="primary">Submit</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default LayoutsFormRow;
