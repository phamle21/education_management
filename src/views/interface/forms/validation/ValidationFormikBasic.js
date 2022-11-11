import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ValidationFormikBasic = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    userName: Yup.string().required('User name is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zip: Yup.string().required('Zip is required'),
    terms: Yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });
  const initialValues = { firstName: '', lastName: '', userName: '', city: '', state: '', zip: '', terms: false };
  const onSubmit = (values) => console.log('submit form', values);

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <Row className="mb-3 g-3">
        <Col md="6">
          <Form.Group className="form-group position-relative tooltip-end-top">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" name="firstName" onChange={handleChange} value={values.firstName} />
            {errors.firstName && touched.firstName && <div className="d-block invalid-tooltip">{errors.firstName}</div>}
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group className="form-group position-relative tooltip-end-top">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" name="lastName" value={values.lastName} onChange={handleChange} />
            {errors.lastName && touched.lastName ? <div className="d-block invalid-tooltip">{errors.lastName}</div> : null}
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group className="form-group position-relative tooltip-end-top">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" name="city" value={values.city} onChange={handleChange} />
            {errors.city && touched.city && <div className="d-block invalid-tooltip">{errors.city}</div>}
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group className="form-group position-relative tooltip-end-top">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="userName" value={values.userName} onChange={handleChange} />
            {errors.userName && touched.userName && <div className="d-block invalid-tooltip">{errors.userName}</div>}
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group className="form-group position-relative tooltip-end-top">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" name="state" value={values.state} onChange={handleChange} />
            {errors.state && touched.state && <div className="d-block invalid-tooltip">{errors.state}</div>}
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group className="form-group position-relative tooltip-end-top">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" name="zip" value={values.zip} onChange={handleChange} />
            {errors.zip && touched.zip && <div className="d-block invalid-tooltip">{errors.zip}</div>}
          </Form.Group>
        </Col>

        <Col md="12">
          <div className="form-check d-inline-block mb-0 position-relative tooltip-end-top">
            <input type="checkbox" className="form-check-input" name="terms" id="formikTermsCheck" onChange={handleChange} checked={values.terms} />
            <label className="form-check-label align-middle" htmlFor="formikTermsCheck">
              I have read and accept the terms and conditions.
            </label>
            {errors.terms && touched.terms && <div className="d-block invalid-tooltip">{errors.terms}</div>}
          </div>
        </Col>
      </Row>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ValidationFormikBasic;
