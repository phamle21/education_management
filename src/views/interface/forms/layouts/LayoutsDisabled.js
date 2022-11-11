import React from 'react';
import { Form } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const LayoutsDisabled = () => {
  return (
    <Form>
      <fieldset disabled="disabled">
        <div className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" disabled value="support@crealeaf.com" />
        </div>
      </fieldset>
      <fieldset disabled="disabled">
        <div className="mb-3 top-label">
          <Form.Control type="email" disabled value="support@crealeaf.com" />
          <Form.Label>EMAIL</Form.Label>
        </div>
      </fieldset>
      <fieldset disabled="disabled">
        <div className="mb-3 form-floating">
          <Form.Control type="email" placeholder="Email" disabled value="support@crealeaf.com" />
          <Form.Label>Email</Form.Label>
        </div>
      </fieldset>
      <fieldset disabled="disabled">
        <div className="mb-3 filled">
          <CsLineIcons icon="user" />
          <Form.Control type="email" placeholder="Email" disabled value="support@crealeaf.com" />
        </div>
      </fieldset>
    </Form>
  );
};

export default LayoutsDisabled;
