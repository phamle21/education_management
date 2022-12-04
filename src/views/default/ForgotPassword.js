import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useFormik } from 'formik';
import LayoutFullpage from 'layout/LayoutFullpage';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import * as Yup from 'yup';

const ForgotPassword = () => {
  const title = 'Forgot Password';
  const description = 'Forgot Password Page';

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
  });
  const initialValues = { email: '' };
  const onSubmit = (values) => console.log('submit form', values);

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  const leftSide = (
    <div className="min-h-100 d-flex align-items-center">
      <div className="w-100 w-lg-75 w-xxl-50">
        <div>
          <div className="mb-5">
            <h1 className="display-3 text-white">Code Academy</h1>
            <h1 className="display-3 text-white">Ready For You To Learn</h1>
          </div>
          <p className="h6 text-white lh-1-5 mb-5">
            Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competencies before
            process-centric communities...
          </p>
        </div>
      </div>
    </div>
  );

  const rightSide = (
    <div className="sw-lg-70 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep py-5 full-page-content-right-border">
      <div className="sw-lg-50 px-5">
        <div className="mb-5">
          <h2 className="cta-1 mb-0 text-primary">Quên mật khẩu?</h2>
          <h2 className="cta-1 text-primary">Hãy tạo lại nó!</h2>
        </div>
        <div className="mb-5">
          <p className="h6">Vui lòng nhập email để nhận mã xác nhận</p>
        </div>
        <div>
          <form id="forgotPasswordForm" className="tooltip-end-bottom" onSubmit={handleSubmit}>
            <div className="mb-3 filled form-group tooltip-end-top">
              <CsLineIcons icon="email" />
              <Form.Control type="text" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
              {errors.email && touched.email && <div className="d-block invalid-tooltip">{errors.email}</div>}
            </div>
            <Button size="lg" type="submit">
              Gửi mã xác nhận
            </Button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <HtmlHead title={title} description={description} />
      <LayoutFullpage left={leftSide} right={rightSide} />
    </>
  );
};

export default ForgotPassword;
