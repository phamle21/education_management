import React from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NotificationPrimary = () => {
  const notify = () => toast('Primary Notification!', { className: 'primary' });
  return (
    <Button variant="outline-primary" onClick={notify}>
      Primary
    </Button>
  );
};

export const NotificationSecondary = () => {
  const notify = () => toast('Secondary Notification!', { className: 'secondary' });
  return (
    <Button variant="outline-secondary" onClick={notify}>
      Secondary
    </Button>
  );
};

export const NotificationTertiary = () => {
  const notify = () => toast('Tertiary Notification!', { className: 'tertiary' });
  return (
    <Button variant="outline-tertiary" onClick={notify}>
      Tertiary
    </Button>
  );
};

export const NotificationQuaternary = () => {
  const notify = () => toast('Quaternary Notification!', { className: 'quaternary' });
  return (
    <Button variant="outline-quaternary" onClick={notify}>
      Quaternary
    </Button>
  );
};

export const NotificationWarning = () => {
  const notify = () => toast('Warning Notification!', { className: 'warning' });
  return (
    <Button variant="outline-warning" onClick={notify}>
      Warning
    </Button>
  );
};

export const NotificationDanger = () => {
  const notify = () => toast('Danger Notification!', { className: 'danger' });
  return (
    <Button variant="outline-danger" onClick={notify}>
      Danger
    </Button>
  );
};

export const NotificationInfo = () => {
  const notify = () => toast('Info Notification!', { className: 'info' });
  return (
    <Button variant="outline-info" onClick={notify}>
      Info
    </Button>
  );
};

export const NotificationSuccess = () => {
  const notify = () => toast('Success Notification!', { className: 'success' });
  return (
    <Button variant="outline-success" onClick={notify}>
      Success
    </Button>
  );
};
