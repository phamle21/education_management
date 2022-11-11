import { Button, ButtonGroup, Dropdown, Form } from 'react-bootstrap';
import React, { useEffect, useRef } from 'react';

const CheckAll = ({ tableInstance }) => {
  const checkAllRef = useRef(null);
  const { getToggleAllPageRowsSelectedProps, selectedFlatRows, setIsOpenDeleteConfirmModal } = tableInstance;
  const { onChange, checked, indeterminate } = getToggleAllPageRowsSelectedProps();

  useEffect(() => {
    if (checkAllRef.current) {
      checkAllRef.current.indeterminate = indeterminate;
    }
    return () => {};
  }, [indeterminate]);

  return (
    <Dropdown drop="down" as={ButtonGroup} className="ms-1 check-all-container" align="end">
      <Button variant="outline-primary" className="btn-custom-control p-0 ps-3 pe-2" onClick={onChange}>
        <Form.Check ref={checkAllRef} className="form-check float-end pt-0" type="checkbox" checked={checked} onChange={() => {}} />
      </Button>
      <Dropdown.Toggle split as={Button} variant="outline-primary" />
      <Dropdown.Menu
        popperConfig={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [10, 5],
              },
            },
            {
              name: 'computeStyles',
              options: {
                gpuAcceleration: false,
              },
            },
          ],
        }}
      >
        <Dropdown.Item href="#/action" disabled={selectedFlatRows.length === 0} onClick={() => setIsOpenDeleteConfirmModal(true)}>
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default CheckAll;
