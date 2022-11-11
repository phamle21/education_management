import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const InputGroupMultipleAddons = () => {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <InputGroup.Text>0.00</InputGroup.Text>
        <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
      </InputGroup>
      <InputGroup>
        <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
        <InputGroup.Text>$</InputGroup.Text>
        <InputGroup.Text>0.00</InputGroup.Text>
      </InputGroup>
    </>
  );
};

export default InputGroupMultipleAddons;
