import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const InputSpinnerInputDisabled = () => {
  const [value, setValue] = useState(1);

  const onInput = () => {};

  const spinUp = () => {
    setValue(parseInt(typeof value === 'number' ? value : 0, 10) + 1);
  };

  const spinDown = () => {
    setValue(parseInt(typeof value === 'number' ? value : 0, 10) - 1);
  };

  return (
    <InputGroup className="spinner pe-none">
      <Form.Control value={value} onInput={onInput} disabled />
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

export default InputSpinnerInputDisabled;
