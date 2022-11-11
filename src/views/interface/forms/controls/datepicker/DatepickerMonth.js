import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatepickerMonth = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker
      className="form-control"
      showMonthYearPicker
      showFullMonthYearPicker
      placeholderText=""
      dateFormat="MMMM"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};

export default DatepickerMonth;
