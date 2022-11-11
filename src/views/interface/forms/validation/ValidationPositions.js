import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';

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

const ValidationPositions = () => {
  const validationSchema = Yup.object().shape({
    labelEnd: Yup.string().required(),
    topCenter: Yup.string().required(),
    bottomCenter: Yup.string().required(),
    topStart: Yup.string().required(),
    topEnd: Yup.string().required(),
    bottomStart: Yup.string().required(),
    bottomEnd: Yup.string().required(),
  });
  const initialValues = { labelEnd: '', topCenter: '', bottomCenter: '', topStart: '', topEnd: '', bottomStart: '', bottomEnd: '' };
  const onSubmit = (values) => console.log('submit form', values);

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <div className="tooltip-label-end">
        <Form.Group className="mb-3 form-group position-relative">
          <Form.Label>Label End</Form.Label>
          <Form.Control type="text" name="labelEnd" onChange={handleChange} value={values.labelEnd} />
          {errors.labelEnd && touched.labelEnd && <LabelEndTooltip>Label End!</LabelEndTooltip>}
        </Form.Group>
      </div>
      <Form.Group className="tooltip-center-top position-relative mb-3">
        <Form.Label>Top Center</Form.Label>
        <Form.Control type="text" name="topCenter" onChange={handleChange} value={values.topCenter} />
        {errors.topCenter && touched.topCenter && <div className="d-block invalid-tooltip">Top Center!</div>}
      </Form.Group>

      <Form.Group className="tooltip-center-bottom position-relative mb-3">
        <Form.Label>Bottom Center</Form.Label>
        <Form.Control type="text" name="bottomCenter" onChange={handleChange} value={values.bottomCenter} />
        {errors.bottomCenter && touched.bottomCenter && <div className="d-block invalid-tooltip">Bottom Center!</div>}
      </Form.Group>

      <Form.Group className="tooltip-start-top position-relative mb-3">
        <Form.Label>Top Start</Form.Label>
        <Form.Control type="text" name="topStart" onChange={handleChange} value={values.topStart} />
        {errors.topStart && touched.topStart && <div className="d-block invalid-tooltip">Top Start!</div>}
      </Form.Group>

      <Form.Group className="tooltip-end-top position-relative mb-3">
        <Form.Label>Top End</Form.Label>
        <Form.Control type="text" name="topEnd" onChange={handleChange} value={values.topEnd} />
        {errors.topEnd && touched.topEnd && <div className="d-block invalid-tooltip">Top End!</div>}
      </Form.Group>

      <Form.Group className="tooltip-start-bottom position-relative mb-3">
        <Form.Label>Bottom Start</Form.Label>
        <Form.Control type="text" name="bottomStart" onChange={handleChange} value={values.bottomStart} />
        {errors.bottomStart && touched.bottomStart && <div className="d-block invalid-tooltip">Bottom Start!</div>}
      </Form.Group>

      <Form.Group className="tooltip-end-bottom position-relative mb-3">
        <Form.Label>Bottom End</Form.Label>
        <Form.Control type="text" name="bottomEnd" onChange={handleChange} value={values.bottomEnd} />
        {errors.bottomEnd && touched.bottomEnd && <div className="d-block invalid-tooltip">Bottom End!</div>}
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ValidationPositions;
