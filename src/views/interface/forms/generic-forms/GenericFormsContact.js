import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Select from 'react-select';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const GenericFormsContact = () => {
  const [selectValue, setSelectValue] = useState();
  const options = [
    { value: 'Sales', label: 'Sales' },
    { value: 'Human Resources', label: 'Human Resources' },
    { value: 'Accounting', label: 'Accounting' },
  ];

  return (
    <Form>
      <div className="mb-7">
        <div className="mb-3 filled">
          <CsLineIcons icon="user" />
          <Form.Control type="text" placeholder="Name" />
        </div>
        <div className="mb-3 filled">
          <CsLineIcons icon="email" />
          <Form.Control type="email" placeholder="Email" />
        </div>
        <div className="mb-3 filled">
          <CsLineIcons icon="phone" />
          <Form.Control type="text" placeholder="Phone" />
        </div>
        <div className="mb-3 filled">
          <CsLineIcons icon="diagram-1" />
          <Select classNamePrefix="react-select" options={options} value={selectValue} onChange={setSelectValue} placeholder="Department" />
        </div>
        <div className="mb-3 filled">
          <CsLineIcons icon="notebook-1" />
          <Form.Control as="textarea" rows={3} placeholder="Address" />
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center">
        <Button variant="primary" className="btn-icon btn-icon-end">
          <span>Send</span> <CsLineIcons icon="chevron-right" />
        </Button>
      </div>
    </Form>
  );
};

export default GenericFormsContact;
