import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatepickerTime = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker
      className="form-control"
      dateFormat="h:mm aa"
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};

export default DatepickerTime;
