import React from 'react';
import { Card } from 'react-bootstrap';

const ListTasksApart = () => {
  return (
    <div className="mb-n2">
      <Card className="mb-2">
        <Card.Body className="py-4">
          <label className="form-check custom-icon mb-0 checked-line-through checked-opacity-75">
            <input type="checkbox" className="form-check-input" defaultChecked />
            <span className="form-check-label">
              <span className="content">
                <span className="heading mb-1 lh-1-25">Create Wireframes</span>
                <span className="d-block text-small text-muted">10:30</span>
              </span>
            </span>
          </label>
        </Card.Body>
      </Card>
      <Card className="mb-2">
        <Card.Body className="py-4">
          <label className="form-check custom-icon mb-0 checked-line-through checked-opacity-75">
            <input type="checkbox" className="form-check-input" defaultChecked />
            <span className="form-check-label">
              <span className="content">
                <span className="heading mb-1 lh-1-25">Business lunch with clients</span>
                <span className="d-block text-small text-muted">12:30</span>
              </span>
            </span>
          </label>
        </Card.Body>
      </Card>
      <Card className="mb-2">
        <Card.Body className="py-4">
          <label className="form-check custom-icon mb-0 checked-line-through checked-opacity-75">
            <input type="checkbox" className="form-check-input" />
            <span className="form-check-label">
              <span className="content">
                <span className="heading mb-1 lh-1-25">Training with the team</span>
                <span className="d-block text-small text-muted">15:30</span>
              </span>
            </span>
          </label>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListTasksApart;
