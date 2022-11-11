import React, { forwardRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ReactTags from 'react-tag-autocomplete';
import DatePicker from 'react-datepicker';
import Select, { components } from 'react-select';

import 'react-datepicker/dist/react-datepicker.css';

const LayoutsFloatingLabel = () => {
  const [tags, setTags] = useState([]);
  const onTagDelete = (i) => {
    const newTags = [...tags];
    newTags.splice(i, 1);
    setTags(newTags);
  };

  const onTagAddition = (tag) => {
    setTags(() => {
      return [...tags, tag];
    });
  };

  // Datepicker
  const [startDate, setStartDate] = useState();
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="form-floating" onClick={onClick} ref={ref}>
      <input className="form-control" value={value} onChange={() => {}} placeholder="Date" />
      <label>Date</label>
    </div>
  ));
  CustomInput.displayName = 'CustomInput';

  // Select
  const [selectValue, setSelectValue] = useState();
  const options = [
    { value: 'Breadstick', label: 'Breadstick' },
    { value: 'Biscotti', label: 'Biscotti' },
    { value: 'Fougasse', label: 'Fougasse' },
    { value: 'Lefse', label: 'Lefse' },
  ];
  const Control = ({ children, ...props }) => {
    return (
      <components.Control {...props} className="form-floating">
        {children}
        <label>Select</label>
      </components.Control>
    );
  };

  return (
    <Form>
      <div className="mb-3 form-floating">
        <Form.Control type="email" placeholder="Email" />
        <Form.Label>Email</Form.Label>
      </div>
      <div className="mb-3 form-floating">
        <Form.Control type="password" placeholder="Password" />
        <Form.Label>Password</Form.Label>
      </div>
      <div className={`mb-3 form-floating ${tags.length > 0 ? 'tag-added' : 'tag-not-added'}`}>
        <ReactTags tags={tags} allowNew onDelete={onTagDelete} onAddition={onTagAddition} placeholderText="" />
        <Form.Label>Tags</Form.Label>
      </div>
      <div className="mb-3 form-floating">
        <DatePicker className="form-control" customInput={<CustomInput />} selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
      <div className="mb-3 form-floating">
        <Select classNamePrefix="react-select" components={{ Control }} options={options} value={selectValue} onChange={setSelectValue} placeholder="" />
      </div>
      <div className="mb-3 form-floating">
        <Form.Control as="textarea" rows={3} placeholder="Address" />
        <Form.Label>Address</Form.Label>
      </div>
      <Button variant="primary">Submit</Button>
    </Form>
  );
};

export default LayoutsFloatingLabel;
