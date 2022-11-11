import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const InputGroupMultipleInputs = () => {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>First and last name</InputGroup.Text>
        <FormControl aria-label="First name" />
        <FormControl aria-label="Last name" />
      </InputGroup>
    </>
  );
};

export default InputGroupMultipleInputs;
