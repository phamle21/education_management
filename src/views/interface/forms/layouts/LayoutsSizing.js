import React from 'react';
import { Form } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const LayoutsSizing = () => {
  return (
    <Form>
      <div className="mb-5">
        <p>Standard</p>
        <div className="mb-2">
          <Form.Control type="email" size="lg" placeholder="form-control-lg" />
        </div>
        <div className="mb-2">
          <Form.Control type="email" placeholder="form-control" />
        </div>
        <div>
          <Form.Control type="email" size="sm" placeholder="form-control-sms" />
        </div>
      </div>
      <div className="mb-5">
        <p>Top Label</p>
        <div className="mb-2 top-label">
          <Form.Control type="email" size="lg" />
          <Form.Label>EMAIL</Form.Label>
        </div>
        <div className="mb-2 top-label">
          <Form.Control type="email" />
          <Form.Label>EMAIL</Form.Label>
        </div>
        <div className="top-label">
          <Form.Control type="email" size="sm" />
          <Form.Label>EMAIL</Form.Label>
        </div>
      </div>
      <div className="mb-5">
        <p>Filled</p>
        <div className="mb-2 filled">
          <CsLineIcons icon="user" />
          <Form.Control type="email" placeholder="Email" size="lg" />
        </div>
        <div className="mb-2 filled">
          <CsLineIcons icon="user" />
          <Form.Control type="email" placeholder="Email" />
        </div>
        <div className="mb-2 filled">
          <CsLineIcons icon="user" />
          <Form.Control type="email" placeholder="Email" size="sm" />
        </div>
      </div>
      <div>
        <p>Floating Label</p>
        <div className="mb-2 form-floating">
          <Form.Control type="email" placeholder="Email" size="lg" />
          <Form.Label>Email</Form.Label>
        </div>
        <div className="mb-2 form-floating">
          <Form.Control type="email" placeholder="Email" />
          <Form.Label>Email</Form.Label>
        </div>
        <div className="form-floating">
          <Form.Control type="email" placeholder="Email" size="sm" />
          <Form.Label>Email</Form.Label>
        </div>
      </div>
    </Form>
  );
};

export default LayoutsSizing;
