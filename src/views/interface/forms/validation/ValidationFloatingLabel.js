import React, { forwardRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ReactTags from 'react-tag-autocomplete';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select, { components } from 'react-select';

const ValidationFloatingLabel = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().nullable().required('Email is required'),
    password: Yup.string().nullable().required('Password is required'),
    tags: Yup.array().nullable().required('Tags is required').min(2, 'Must be add minimum 2 items.'),
    date: Yup.date().nullable().required('Date is required'),
    select: Yup.string().nullable().required('Select is required'),
    address: Yup.string().nullable().required('Address is required'),
  });
  const initialValues = { email: '', password: '', address: '', tags: [], select: '', date: null };
  const onSubmit = (values) => console.log('submit form', values);

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors, setFieldValue } = formik;

  // Tags
  const onTagDelete = (i) => {
    const newTags = [...values.tags];
    newTags.splice(i, 1);
    setFieldValue('tags', newTags);
  };
  const onTagAddition = (tag) => {
    setFieldValue('tags', [...values.tags, tag]);
  };

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
  const selectOnChange = (selectedOption) => {
    setFieldValue('select', selectedOption.value);
    setSelectValue(selectedOption);
  };

  // Datepicker
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="form-floating" onClick={onClick} ref={ref}>
      <input className="form-control" value={value} onChange={() => {}} placeholder="Date" />
      <label>Date</label>
    </div>
  ));
  CustomInput.displayName = 'CustomInput';
  const dateOnChange = (date) => {
    setFieldValue('date', new Date(date));
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="tooltip-end-top">
        <div className="mb-3 form-floating">
          <Form.Control type="text" name="email" value={values.email} onChange={handleChange} placeholder="Email" />
          <Form.Label>Email</Form.Label>
          {errors.email && touched.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="mb-3 form-floating">
          <Form.Control type="password" name="password" value={values.password} onChange={handleChange} placeholder="Password" />
          <Form.Label>Password</Form.Label>
          {errors.password && touched.password && <div className="error">{errors.password}</div>}
        </div>
        <div className={`mb-3 form-floating ${values.tags.length > 0 ? 'tag-added' : 'tag-not-added'}`}>
          <ReactTags tags={values.tags} allowNew onDelete={onTagDelete} onAddition={onTagAddition} placeholderText="" />
          <Form.Label>Tags</Form.Label>
          {errors.tags && touched.tags && <div className="error">{errors.tags}</div>}
        </div>
        <div className="mb-3 form-floating">
          <DatePicker className="form-control" name="date" customInput={<CustomInput />} selected={values.date} onChange={dateOnChange} />
          {errors.date && touched.date && <div className="error">{errors.date}</div>}
        </div>
        <div className="mb-3 form-floating">
          <Select
            classNamePrefix="react-select"
            name="select"
            components={{ Control }}
            options={options}
            value={selectValue}
            onChange={selectOnChange}
            placeholder=""
          />
          {errors.select && touched.select && <div className="error">{errors.select}</div>}
        </div>
        <div className="mb-3 form-floating">
          <Form.Control name="address" as="textarea" rows={3} value={values.address} onChange={handleChange} placeholder="Address" />
          <Form.Label>Address</Form.Label>
          {errors.address && touched.address && <div className="error">{errors.address}</div>}
        </div>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ValidationFloatingLabel;
