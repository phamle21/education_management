import React from 'react';

const RespondContentText = ({ text, time }) => {
  return (
    <div className="bg-separator-light d-inline-block rounded-md py-3 px-3 pe-7 position-relative text-alternate">
      <span className="text">{text}</span>
      <span className="position-absolute text-extra-small text-alternate opacity-75 b-2 e-2 time">{time}</span>
    </div>
  );
};
export default RespondContentText;
