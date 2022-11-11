import React from 'react';

const MessageContentText = ({ text, time }) => {
  return (
    <div className="bg-gradient-light d-inline-block rounded-md py-3 px-3 ps-7 text-white position-relative">
      <span className="text">{text}</span>
      <span className="position-absolute text-extra-small text-white opacity-75 b-2 s-2 time">{time}</span>
    </div>
  );
};
export default MessageContentText;
