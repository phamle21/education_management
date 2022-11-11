import React from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotificationWithoutProgress = () => {
  const notify = () => toast('Basic Notification!', { hideProgressBar: true });
  return (
    <Button variant="outline-primary" onClick={notify}>
      Without Progress
    </Button>
  );
};

export default NotificationWithoutProgress;
