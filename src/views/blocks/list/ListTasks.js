import React from 'react';
import { Card } from 'react-bootstrap';

const ListTasks = () => {
  return (
    <Card>
      <Card.Body className="mb-n2">
        <div className="mb-2">
          <label className="form-check w-100 checked-line-through checked-opacity-75">
            <input type="checkbox" className="form-check-input" defaultChecked />
            <span className="form-check-label d-block">
              <span>Create Wireframes</span>
              <span className="text-muted d-block text-small mt-0">Today 09:00</span>
            </span>
          </label>
        </div>
        <div className="mb-2">
          <label className="form-check w-100 checked-line-through checked-opacity-75">
            <input type="checkbox" className="form-check-input" defaultChecked />
            <span className="form-check-label d-block">
              <span>Meeting with the team</span>
              <span className="text-muted d-block text-small mt-0">Today 13:00</span>
            </span>
          </label>
        </div>
        <div className="mb-2">
          <label className="form-check w-100 checked-line-through checked-opacity-75">
            <input type="checkbox" className="form-check-input" />
            <span className="form-check-label d-block">
              <span>Business lunch with clients</span>
              <span className="text-muted d-block text-small mt-0">Today 14:00</span>
            </span>
          </label>
        </div>
        <div className="mb-2">
          <label className="form-check w-100 checked-line-through checked-opacity-75">
            <input type="checkbox" className="form-check-input" />
            <span className="form-check-label d-block">
              <span>Training with the team</span>
              <span className="text-muted d-block text-small mt-0">Today 15:00</span>
            </span>
          </label>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ListTasks;
