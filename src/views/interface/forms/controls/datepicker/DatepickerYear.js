import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatepickerYear = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker className="form-control" showYearPicker placeholderText="" dateFormat="yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default DatepickerYear;
