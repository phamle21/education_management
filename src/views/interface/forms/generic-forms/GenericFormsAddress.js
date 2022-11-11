import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Select from 'react-select';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const GenericFormsAddress = () => {
  const [selectValueState, setSelectValueState] = useState();
  const optionsState = [
    { value: 'Fougasse', label: 'Fougasse' },
    { value: 'Lefse', label: 'Lefse' },
  ];

  const [selectValueCity, setSelectValueCity] = useState();
  const optionsCity = [
    { value: 'Breadstick', label: 'Breadstick' },
    { value: 'Biscotti', label: 'Biscotti' },
  ];

  return (
    <Form>
      <Row className="g-3 mb-7">
        <Col lg="6">
          <div className="top-label">
            <Form.Control type="text" />
            <Form.Label>FIRST NAME</Form.Label>
          </div>
        </Col>
        <Col lg="6">
          <div className="top-label">
            <Form.Control type="text" />
            <Form.Label>LAST NAME</Form.Label>
          </div>
        </Col>
        <Col lg="6">
          <div className="top-label">
            <Form.Control type="text" />
            <Form.Label>PHONE</Form.Label>
          </div>
        </Col>
        <Col lg="6">
          <div className="top-label">
            <Form.Control type="text" />
            <Form.Label>COMPANY</Form.Label>
          </div>
        </Col>
        <Col lg="4">
          <div className="top-label">
            <Select classNamePrefix="react-select" options={optionsState} value={selectValueState} onChange={setSelectValueState} placeholder="" />
            <Form.Label>STATE</Form.Label>
          </div>
        </Col>
        <Col lg="4">
          <div className="top-label">
            <Select classNamePrefix="react-select" options={optionsCity} value={selectValueCity} onChange={setSelectValueCity} placeholder="" />
            <Form.Label>CITY</Form.Label>
          </div>
        </Col>
        <Col lg="4">
          <div className="top-label">
            <Form.Control type="text" />
            <Form.Label>ZIP CODE</Form.Label>
          </div>
        </Col>
        <Col lg="12">
          <div className="top-label">
            <Form.Control as="textarea" rows={3} />
            <Form.Label>ADDRESS</Form.Label>
          </div>
        </Col>
      </Row>
      <div className="d-flex justify-content-end align-items-center">
        <Button variant="primary" className="btn-icon btn-icon-end">
          <span>Save</span> <CsLineIcons icon="chevron-right" />
        </Button>
      </div>
    </Form>
  );
};

export default GenericFormsAddress;
