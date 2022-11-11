import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LabelEndTooltip = ({ children }) => {
  const refError = useRef(null);
  const [left, setLeft] = useState(10);
  useEffect(() => {
    if (refError.current) {
      try {
        setLeft(refError.current.parentElement.querySelector('label').clientWidth + 10);
      } catch (e) {
        // console.log()
      }
    }
    return () => {};
  }, []);

  return (
    <div ref={refError} className="error" style={{ left }}>
      {children}
    </div>
  );
};

const ValidationCommonRules = () => {
  const letterRegex = /^[A-Za-z]+$/;
  const digitRegex = /^[0-9]+$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string().matches(letterRegex, 'Must be letters only!').required('Name is required'),
    id: Yup.string().matches(digitRegex, 'Must be digits only!').min(8, 'Must be 8 chars only!').max(8, 'Must be 8 chars only!').required('Id is required'),
    age: Yup.number().min(19, 'Must be 18 and over!').required('Age is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    details: Yup.string().max(20, 'Must be 20 chars or less!').required('Details required'),
    password: Yup.string().min(6, 'Must be at least 6 chars!').required('Password is required'),
    passwordConfirm: Yup.string()
      .required('Password Confirm is required')
      .oneOf([Yup.ref('password'), null], 'Must be same with password!'),
    creditCard: Yup.string()
      .matches(digitRegex, 'Must be a valid credit card number without whitespace!')
      .min(16, 'Must be a valid credit card number without whitespace!')
      .max(16, 'Must be a valid credit card number without whitespace!')
      .required('Credit Card is required'),
  });
  const initialValues = { name: '', id: '', age: '', email: '', details: '', password: '', passwordConfirm: '', creditCard: '' };
  const onSubmit = (values) => console.log('submit form', values);

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  return (
    <form id="rulesForm" className="tooltip-label-end" onSubmit={handleSubmit}>
      <Form.Group className="mb-3 form-group position-relative">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleChange} value={values.name} />
        <Form.Text>Must be letters only!</Form.Text>
        {errors.name && touched.name && <LabelEndTooltip>{errors.name}</LabelEndTooltip>}
      </Form.Group>

      <Form.Group className="mb-3 form-group position-relative">
        <Form.Label>Id</Form.Label>
        <Form.Control type="text" name="id" onChange={handleChange} value={values.id} />
        <Form.Text>Must be digits and 8 chars only!</Form.Text>
        {errors.id && touched.id && <LabelEndTooltip>{errors.id}</LabelEndTooltip>}
      </Form.Group>

      <Form.Group className="mb-3 form-group position-relative">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" name="age" onChange={handleChange} value={values.age} />
        <Form.Text>Must be 18 and over!</Form.Text>
        {errors.age && touched.age && <LabelEndTooltip>{errors.age}</LabelEndTooltip>}
      </Form.Group>

      <Form.Group className="mb-3 form-group position-relative">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" name="email" onChange={handleChange} value={values.email} />
        <Form.Text>Must be a valid email!</Form.Text>
        {errors.email && touched.email && <LabelEndTooltip>{errors.email}</LabelEndTooltip>}
      </Form.Group>

      <Form.Group className="mb-3 form-group position-relative">
        <Form.Label>Details</Form.Label>
        <Form.Control as="textarea" name="details" onChange={handleChange} value={values.details} />
        <Form.Text>Must be 20 chars or less!</Form.Text>
        {errors.details && touched.details && <LabelEndTooltip>{errors.details}</LabelEndTooltip>}
      </Form.Group>

      <Form.Group className="mb-3 form-group position-relative">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleChange} value={values.password} />
        <Form.Text>Must be at least 6 chars!</Form.Text>
        {errors.password && touched.password && <LabelEndTooltip>{errors.password}</LabelEndTooltip>}
      </Form.Group>

      <Form.Group className="mb-3 form-group position-relative">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name="passwordConfirm" onChange={handleChange} value={values.passwordConfirm} />
        <Form.Text>Must be same with password!</Form.Text>
        {errors.passwordConfirm && touched.passwordConfirm && <LabelEndTooltip>{errors.passwordConfirm}</LabelEndTooltip>}
      </Form.Group>

      <Form.Group className="mb-3 form-group position-relative">
        <Form.Label>Credit Card</Form.Label>
        <Form.Control type="text" name="creditCard" onChange={handleChange} value={values.creditCard} />
        <Form.Text>Must be a valid credit card number without whitespace!</Form.Text>
        {errors.creditCard && touched.creditCard && <LabelEndTooltip>{errors.creditCard}</LabelEndTooltip>}
      </Form.Group>
      <Button type="submit" className="btn btn-primary mb-0">
        Submit
      </Button>
    </form>
  );
};

export default ValidationCommonRules;
