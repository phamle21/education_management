import React from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotificationBasic = () => {
  const notify = () => toast('Basic Notification!');
  return (
    <Button variant="outline-primary" onClick={notify}>
      Notify!
    </Button>
  );
};

export default NotificationBasic;
