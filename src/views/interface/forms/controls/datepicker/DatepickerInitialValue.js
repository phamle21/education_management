import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatepickerInitialValue = () => {
  const [startDate, setStartDate] = useState(new Date());
  return <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />;
};

export default DatepickerInitialValue;
