import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const InputSpinnerMaxMin = () => {
  const [value, setValue] = useState(6);
  const max = 12;
  const min = 0;

  const getValueInLimit = (desiredValue) => {
    let val = desiredValue;
    if (desiredValue > max) {
      val = max;
    }
    if (desiredValue < min) {
      val = min;
    }
    return val;
  };

  const onInput = (event) => {
    const val = getValueInLimit(event.target.value || 0);
    setValue(val);
  };

  const spinUp = () => {
    const val = getValueInLimit(parseInt(typeof value === 'number' ? value : 0, 10) + 1);
    setValue(val);
  };

  const spinDown = () => {
    const val = getValueInLimit(parseInt(typeof value === 'number' ? value : 0, 10) - 1);
    setValue(val);
  };

  return (
    <InputGroup className="spinner">
      <Form.Control value={value} onInput={onInput} />
      <InputGroup.Text id="basic-addon1">
        <button type="button" className="spin-up" onClick={spinUp}>
          <span className="arrow" />
        </button>
        <button type="button" className="spin-down" onClick={spinDown}>
          <span className="arrow" />
        </button>
      </InputGroup.Text>
    </InputGroup>
  );
};

export default InputSpinnerMaxMin;
