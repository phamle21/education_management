import React from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const NotificationIcon = () => {
  const Content = () => (
    <>
      <div className="mb-2">
        <CsLineIcons icon="prize" width="20" height="20" className="cs-icon icon text-primary me-3 align-middle" />
        <span className="align-middle text-primary heading font-heading">Doing great, keep it up!</span>
      </div>
      <div className="text-muted mb-2">Dessert dragée carrot cake cheesecake liquorice gummi bears tootsie.</div>
    </>
  );
  const notify = () => toast(<Content />);
  return (
    <Button variant="outline-primary" onClick={notify}>
      Icon
    </Button>
  );
};

export default NotificationIcon;
