import { getDay } from 'date-fns';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatepickerFilter = () => {
  const [startDate, setStartDate] = useState(null);
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };
  return <DatePicker className="form-control" placeholderText="Weekdays" filterDate={isWeekday} selected={startDate} onChange={(date) => setStartDate(date)} />;
};

export default DatepickerFilter;
