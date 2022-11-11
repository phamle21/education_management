import React from 'react';
import { Button, Form } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const GenericFormsLogin = () => {
  return (
    <Form>
      <div className="mb-7">
        <div className="mb-3 filled">
          <CsLineIcons icon="email" />
          <Form.Control type="email" placeholder="Email" />
        </div>
        <div className="mb-3 filled">
          <CsLineIcons icon="lock-on" />
          <Form.Control type="password" placeholder="Password" />
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <Button variant="link" className="me-3 px-0">
          Forgot Password?
        </Button>
        <div>
          <Button variant="primary" className="btn-icon btn-icon-end">
            <span>Login</span> <CsLineIcons icon="chevron-right" />
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default GenericFormsLogin;
