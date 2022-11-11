import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import 'react-datepicker/dist/react-datepicker.css';

const GenericFormsPersonal = () => {
  const [selectValueGender, setSelectValueGender] = useState();
  const optionsGender = [
    { value: 'Female', label: 'Female' },
    { value: 'Male', label: 'Male' },
    { value: 'Other', label: 'Other' },
  ];

  const [selectValueFiling, setSelectValueFiling] = useState();
  const optionsFiling = [
    { value: 'Single', label: 'Single' },
    { value: 'Married', label: 'Married' },
  ];

  const [startDate, setStartDate] = useState(null);

  return (
    <Form>
      <Row className="g-3 mb-7">
        <Col lg="6">
          <div className="top-label">
            <Form.Control type="text" />
            <Form.Label>FULL NAME</Form.Label>
          </div>
        </Col>
        <Col lg="6">
          <div className="top-label">
            <Form.Control type="text" />
            <Form.Label>SOCIAL SECURITY NUMBER</Form.Label>
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
            <Form.Control type="email" />
            <Form.Label>EMAIL</Form.Label>
          </div>
        </Col>
        <Col lg="4">
          <div className="top-label">
            <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
            <Form.Label>BIRTHDAY</Form.Label>
          </div>
        </Col>
        <Col lg="4">
          <div className="top-label">
            <Select classNamePrefix="react-select" options={optionsGender} value={selectValueGender} onChange={setSelectValueGender} placeholder="" />
            <Form.Label>GENDER</Form.Label>
          </div>
        </Col>
        <Col lg="4">
          <div className="top-label">
            <Select classNamePrefix="react-select" options={optionsFiling} value={selectValueFiling} onChange={setSelectValueFiling} placeholder="" />
            <Form.Label>FILING STATUS</Form.Label>
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

export default GenericFormsPersonal;
