import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ReactTags from 'react-tag-autocomplete';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

import 'react-datepicker/dist/react-datepicker.css';

const LayoutsTopLabel = () => {
  // Tags
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
  const [startDate, setStartDate] = useState(null);

  // Select
  const [selectValue, setSelectValue] = useState();
  const options = [
    { value: 'Breadstick', label: 'Breadstick' },
    { value: 'Biscotti', label: 'Biscotti' },
    { value: 'Fougasse', label: 'Fougasse' },
    { value: 'Lefse', label: 'Lefse' },
  ];

  return (
    <Form>
      <div className="mb-3 top-label">
        <Form.Control type="email" />
        <Form.Label>EMAIL</Form.Label>
      </div>
      <div className="mb-3 top-label">
        <Form.Control type="password" />
        <Form.Label>PASSWORD</Form.Label>
      </div>
      <div className="mb-3 top-label">
        <ReactTags tags={tags} allowNew onDelete={onTagDelete} onAddition={onTagAddition} placeholderText="" />
        <Form.Label>TAGS</Form.Label>
      </div>
      <div className="mb-3 top-label">
        <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
        <Form.Label>DATE</Form.Label>
      </div>
      <div className="mb-3 top-label">
        <Select classNamePrefix="react-select" options={options} value={selectValue} onChange={setSelectValue} placeholder="" />
        <Form.Label>SELECT</Form.Label>
      </div>
      <div className="mb-3 top-label">
        <Form.Control as="textarea" rows={3} />
        <Form.Label>ADDRESS</Form.Label>
      </div>
      <Button variant="primary">Submit</Button>
    </Form>
  );
};

export default LayoutsTopLabel;
