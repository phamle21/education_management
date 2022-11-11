import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ReactTags from 'react-tag-autocomplete';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

import 'react-datepicker/dist/react-datepicker.css';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const LayoutsFilled = () => {
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
      <div className="mb-3 filled">
        <CsLineIcons icon="user" />
        <Form.Control type="email" placeholder="Email" />
      </div>
      <div className="mb-3 filled">
        <CsLineIcons icon="lock-on" />
        <Form.Control type="password" placeholder="Password" />
      </div>
      <div className="mb-3 filled">
        <CsLineIcons icon="tag" />
        <ReactTags tags={tags} allowNew onDelete={onTagDelete} onAddition={onTagAddition} placeholderText="Tags" />
      </div>
      <div className="mb-3 filled">
        <CsLineIcons icon="calendar" />
        <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="Date" />
      </div>
      <div className="mb-3 filled">
        <CsLineIcons icon="loaf" />
        <Select classNamePrefix="react-select" options={options} value={selectValue} onChange={setSelectValue} placeholder="Select" />
      </div>
      <div className="mb-3 filled">
        <CsLineIcons icon="notebook-1" />
        <Form.Control as="textarea" rows={3} placeholder="Address" />
      </div>
      <Button variant="primary">Submit</Button>
    </Form>
  );
};

export default LayoutsFilled;
