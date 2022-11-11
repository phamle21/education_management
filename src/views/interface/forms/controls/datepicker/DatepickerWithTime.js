import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatepickerWithTime = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker
      className="form-control"
      showTimeSelect
      placeholderText=""
      dateFormat="MMMM d, yyyy h:mm aa"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};

export default DatepickerWithTime;
