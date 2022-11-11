import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import 'react-datepicker/dist/react-datepicker.css';

const GenericFormsReservation = () => {
  const [selectValueAdults, setSelectValueAdults] = useState();
  const optionsAdults = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
  ];

  const [selectValueChildren, setSelectValueChildren] = useState();
  const optionsChildren = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
  ];

  const [selectValueRoomType, setSelectValueRoomType] = useState();
  const optionsRoomType = [
    { value: 'Type 1', label: 'Type 1' },
    { value: 'Type 2', label: 'Type 2' },
    { value: 'Type 3', label: 'Type 3' },
  ];

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <Form>
      <Row className="g-3 mb-7">
        <Col lg="6">
          <div className="top-label">
            <DatePicker
              className="form-control"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
            <Form.Label>CHECK IN</Form.Label>
          </div>
        </Col>
        <Col lg="6">
          <div className="top-label">
            <DatePicker
              className="form-control"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
            <Form.Label>CHECK OUT</Form.Label>
          </div>
        </Col>

        <Col lg="4">
          <div className="top-label">
            <Select classNamePrefix="react-select" options={optionsRoomType} value={selectValueRoomType} onChange={setSelectValueRoomType} placeholder="" />
            <Form.Label>ROOM TYPE</Form.Label>
          </div>
        </Col>
        <Col lg="4">
          <div className="top-label">
            <Select classNamePrefix="react-select" options={optionsAdults} value={selectValueAdults} onChange={setSelectValueAdults} placeholder="" />
            <Form.Label>ADULTS</Form.Label>
          </div>
        </Col>
        <Col lg="4">
          <div className="top-label">
            <Select classNamePrefix="react-select" options={optionsChildren} value={selectValueChildren} onChange={setSelectValueChildren} placeholder="" />
            <Form.Label>CHILDREN</Form.Label>
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

export default GenericFormsReservation;
