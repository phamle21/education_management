import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatepickerPlaceholder = () => {
  const [startDate, setStartDate] = useState(null);
  return <DatePicker className="form-control" placeholderText="Date" selected={startDate} onChange={(date) => setStartDate(date)} />;
};

export default DatepickerPlaceholder;
