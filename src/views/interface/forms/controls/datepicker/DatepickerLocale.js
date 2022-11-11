import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';

const DatepickerLocale = () => {
  const [startDate, setStartDate] = useState(null);
  registerLocale('es', es);
  return <DatePicker className="form-control" locale="es" selected={startDate} onChange={(date) => setStartDate(date)} />;
};

export default DatepickerLocale;
