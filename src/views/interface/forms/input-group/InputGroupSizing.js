import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const InputGroupSizing = () => {
  return (
    <>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
        <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-lg" />
      </InputGroup>
    </>
  );
};

export default InputGroupSizing;
