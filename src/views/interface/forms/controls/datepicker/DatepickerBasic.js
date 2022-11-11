import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatepickerBasic = () => {
  const [startDate, setStartDate] = useState(null);
  return <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />;
};

export default DatepickerBasic;
