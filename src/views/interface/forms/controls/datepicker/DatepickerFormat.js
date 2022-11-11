import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatepickerFormat = () => {
  const [startDate, setStartDate] = useState(null);
  return <DatePicker className="form-control" dateFormat="dd.MM.yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />;
};

export default DatepickerFormat;
