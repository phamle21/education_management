import React from 'react';
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

const LayoutsColumnAutoSizing = () => {
  return (
    <>
      <Form className="mb-5">
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Control className="mb-2" id="inlineFormInput" placeholder="Jane Doe" />
          </Col>
          <Col xs="auto">
            <InputGroup className="mb-2">
              <InputGroup.Text>@</InputGroup.Text>
              <FormControl id="inlineFormInputGroup" placeholder="Username" />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Form.Check type="checkbox" id="autoSizingCheck" className="mb-2" label="Remember me" />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
      <Form>
        <Row className="align-items-center">
          <Col xs="auto" className="my-1">
            <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
              <option value="0">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col xs="auto" className="my-1">
            <Form.Check type="checkbox" id="customControlAutosizing" label="Remember my preference" />
          </Col>
          <Col xs="auto" className="my-1">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default LayoutsColumnAutoSizing;
