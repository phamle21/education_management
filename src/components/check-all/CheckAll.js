import React, { useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';

const CheckAll = ({ allItems = [], selectedItems = [], onToggle = () => {}, inputClassName = 'form-check', className = '' }) => {
  const checkAllRef = useRef(null);
  useEffect(() => {
    if (checkAllRef.current) {
      checkAllRef.current.indeterminate = selectedItems.length > 0 && selectedItems.length < allItems.length;
    }
    return () => {};
  }, [selectedItems, allItems]);

  const onClick = () => {
    onToggle(selectedItems.length === 0 || selectedItems.length < allItems.length);
  };
  return (
    <div className={className} onClick={onClick}>
      <Form.Check ref={checkAllRef} className={inputClassName} type="checkbox" checked={allItems.length === selectedItems.length} onChange={() => {}} />
    </div>
  );
};

export default CheckAll;
