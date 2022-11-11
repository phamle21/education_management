import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const InputSpinnerSeparatedButtons = () => {
  const [value, setValue] = useState(0);

  const onInput = (event) => {
    setValue(event.target.value || 0);
  };

  const spinUp = () => {
    setValue(parseInt(typeof value === 'number' ? value : 0, 10) + 1);
  };

  const spinDown = () => {
    setValue(parseInt(typeof value === 'number' ? value : 0, 10) - 1);
  };

  return (
    <InputGroup className="spinner">
      <InputGroup.Text id="basic-addon1">
        <button type="button" className="spin-down single" onClick={spinDown}>
          -
        </button>
      </InputGroup.Text>
      <Form.Control value={value} onInput={onInput} placeholder="Count" />
      <InputGroup.Text id="basic-addon2">
        <button type="button" className="spin-up single" onClick={spinUp}>
          +
        </button>
      </InputGroup.Text>
    </InputGroup>
  );
};

export default InputSpinnerSeparatedButtons;
