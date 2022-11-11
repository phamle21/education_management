import React from 'react';
import { Button, Card } from 'react-bootstrap';

export const CtaTitleAndButtonsFirst = () => {
  return (
    <Card>
      <Card.Body>
        <h5 className="cta-1 mb-4">
          Introduction to
          <br />
          <span className="text-primary">Bread Making</span>
        </h5>
        <Button variant="gradient-primary" className="me-2">
          Get Started
        </Button>
        <Button variant="outline-primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
};

export const CtaTitleAndButtonsSecond = () => {
  return (
    <Card>
      <Card.Body>
        <div className="text-center">
          <h5 className="cta-1 mb-4">
            Introduction to
            <br />
            <span className="text-primary">Bread Making</span>
          </h5>
          <Button variant="gradient-primary" className="me-2">
            Get Started
          </Button>
          <Button variant="outline-primary">Learn More</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
