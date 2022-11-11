import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatepickerRangeMultiple = () => {
  const [startDate, setStartDate] = useState(new Date('2021/02/08'));
  const [endDate, setEndDate] = useState(new Date('2021/02/10'));
  return (
    <>
      <Row className="g-2">
        <Col>
          <DatePicker
            className="form-control"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
        </Col>
        <Col>
          <DatePicker
            className="form-control"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </Col>
      </Row>
    </>
  );
};

export const DatepickerRangeSingle = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <>
      <DatePicker className="form-control" selected={startDate} onChange={onChange} startDate={startDate} endDate={endDate} selectsRange />
    </>
  );
};
