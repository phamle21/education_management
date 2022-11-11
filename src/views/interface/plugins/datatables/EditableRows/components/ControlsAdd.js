import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ControlsAdd = ({ tableInstance }) => {
  const { toggleAllPageRowsSelected, setIsOpenAddEditModal } = tableInstance;
  const addButtonClick = () => {
    toggleAllPageRowsSelected(false);
    setIsOpenAddEditModal(true);
  };

  return (
    <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top-add">Add</Tooltip>}>
      <Button onClick={addButtonClick} variant="foreground-alternate" className="btn-icon btn-icon-only shadow add-datatable">
        <CsLineIcons icon="plus" />
      </Button>
    </OverlayTrigger>
  );
};
export default ControlsAdd;
