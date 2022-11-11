import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatepickerBottomStart = () => {
  const [startDate, setStartDate] = useState(null);
  return <DatePicker className="form-control" popperPlacement="bottom-start" selected={startDate} onChange={(date) => setStartDate(date)} />;
};

export const DatepickerBottomEnd = () => {
  const [startDate, setStartDate] = useState(null);
  return <DatePicker className="form-control" popperPlacement="bottom-end" selected={startDate} onChange={(date) => setStartDate(date)} />;
};

export const DatepickerBottomCenter = () => {
  const [startDate, setStartDate] = useState(null);
  return <DatePicker className="form-control" popperPlacement="bottom" selected={startDate} onChange={(date) => setStartDate(date)} />;
};

export const DatepickerTopStart = () => {
  const [startDate, setStartDate] = useState(null);
  return <DatePicker className="form-control" popperPlacement="top-start" selected={startDate} onChange={(date) => setStartDate(date)} />;
};

export const DatepickerTopEnd = () => {
  const [startDate, setStartDate] = useState(null);
  return <DatePicker className="form-control" popperPlacement="top-end" selected={startDate} onChange={(date) => setStartDate(date)} />;
};

export const DatepickerTopCenter = () => {
  const [startDate, setStartDate] = useState(null);
  return <DatePicker className="form-control" popperPlacement="top" selected={startDate} onChange={(date) => setStartDate(date)} />;
};
