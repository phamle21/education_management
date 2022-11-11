import { Button } from 'react-bootstrap';
import React from 'react';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const AddNewButton = ({ tableInstance }) => {
  const { toggleAllPageRowsSelected, setIsOpenAddEditModal } = tableInstance;

  const addButtonClick = () => {
    toggleAllPageRowsSelected(false);
    setIsOpenAddEditModal(true);
  };
  return (
    <Button variant="outline-primary" className="btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto" onClick={addButtonClick}>
      <CsLineIcons icon="plus" /> <span>Add Contact</span>
    </Button>
  );
};

export default AddNewButton;
