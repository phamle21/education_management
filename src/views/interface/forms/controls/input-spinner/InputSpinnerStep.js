import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const InputSpinnerStep = () => {
  const [value, setValue] = useState(0);
  const step = 5;

  const onInput = (event) => {
    setValue(event.target.value || 0);
  };

  const spinUp = () => {
    setValue(parseInt(typeof value === 'number' ? value : 0, 10) + step);
  };

  const spinDown = () => {
    setValue(parseInt(typeof value === 'number' ? value : 0, 10) + step * -1);
  };

  return (
    <InputGroup className="spinner">
      <Form.Control className="pe-none" value={value} onInput={onInput} />
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

export default InputSpinnerStep;
