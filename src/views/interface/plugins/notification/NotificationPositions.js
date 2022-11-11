import React from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NotificationPositionsTopLeft = () => {
  const notify = () => toast('Top Left Position!', { position: toast.POSITION.TOP_LEFT });
  return (
    <Button variant="outline-primary" onClick={notify}>
      Top Left
    </Button>
  );
};

export const NotificationPositionsTopCenter = () => {
  const notify = () => toast('Top Center Position!', { position: toast.POSITION.TOP_CENTER });
  return (
    <Button variant="outline-primary" onClick={notify}>
      Top Center
    </Button>
  );
};

export const NotificationPositionsTopRight = () => {
  const notify = () => toast('Top Right Position!', { position: toast.POSITION.TOP_RIGHT });
  return (
    <Button variant="outline-primary" onClick={notify}>
      Top Right
    </Button>
  );
};

export const NotificationPositionsBottomLeft = () => {
  const notify = () => toast('Bottom Left Position!', { position: toast.POSITION.BOTTOM_LEFT });
  return (
    <Button variant="outline-primary" onClick={notify}>
      Bottom Left
    </Button>
  );
};

export const NotificationPositionsBottomCenter = () => {
  const notify = () => toast('Bottom Center Position!', { position: toast.POSITION.BOTTOM_CENTER });
  return (
    <Button variant="outline-primary" onClick={notify}>
      Bottom Center
    </Button>
  );
};

export const NotificationPositionsBottomRight = () => {
  const notify = () => toast('Bottom Right Position!', { position: toast.POSITION.BOTTOM_RIGHT });
  return (
    <Button variant="outline-primary" onClick={notify}>
      Bottom Right
    </Button>
  );
};
