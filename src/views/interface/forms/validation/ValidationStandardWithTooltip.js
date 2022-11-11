import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const ValidationStandardWithTooltip = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 g-3">
        <Col md="6">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandardWithTooltip01">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" defaultValue="Mark" />
            <Form.Control.Feedback type="invalid" tooltip>
              Please provide your first name.
            </Form.Control.Feedback>
            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandardWithTooltip02">
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" defaultValue="Otto" />
            <Form.Control.Feedback type="invalid" tooltip>
              Please provide your last name.
            </Form.Control.Feedback>
            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandardWithTooltip03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid" tooltip>
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandardWithTooltip04">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid" tooltip>
              Please choose a username.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandardWithTooltip05">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid" tooltip>
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="6">
          <Form.Group className="position-relative tooltip-end-top" controlId="validationStandardWithTooltip06">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid" tooltip>
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md="12">
          <div className="form-check d-inline-block mb-0 position-relative tooltip-end-top">
            <input type="checkbox" className="form-check-input" required id="validationStandardWithTooltipTermsCheck" />
            <label className="form-check-label align-middle" htmlFor="validationStandardWithTooltipTermsCheck">
              I have read and accept the terms and conditions.
            </label>
            <Form.Control.Feedback type="invalid" tooltip>
              Please accept terms and conditions.
            </Form.Control.Feedback>
          </div>
        </Col>
      </Row>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ValidationStandardWithTooltip;
