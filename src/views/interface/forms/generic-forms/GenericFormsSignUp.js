import React from 'react';
import { Button, Form } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const GenericFormsSignUp = () => {
  return (
    <Form>
      <div className="mb-7">
        <div className="mb-3 filled">
          <CsLineIcons icon="user" />
          <Form.Control type="email" placeholder="Name" />
        </div>
        <div className="mb-3 filled">
          <CsLineIcons icon="email" />
          <Form.Control type="email" placeholder="Email" />
        </div>
        <div className="mb-3 filled">
          <CsLineIcons icon="lock-on" />
          <Form.Control type="password" placeholder="Password" />
        </div>
        <div className="mb-5 filled">
          <label className="form-check w-100 mb-0">
            <input type="checkbox" className="form-check-input" />
            <span className="form-check-label align-middle">
              <span className="align-middle">I have read and accept the </span>
              <Button variant="link" className="m-0 p-0 lh-1-5 align-middle">
                terms and conditions.
              </Button>
            </span>
          </label>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <Button variant="link" className="me-3 px-0">
          Forgot Password?
        </Button>
        <div>
          <Button variant="primary" className="btn-icon btn-icon-end">
            <span>Sign Up</span> <CsLineIcons icon="chevron-right" />
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default GenericFormsSignUp;
