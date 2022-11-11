import React, { useState } from 'react';
import Select, { components } from 'react-select';

const SelectFloatingLabel = ({ label }) => {
  const [value, setValue] = useState();

  const options = [
    { value: 'Breadstick', label: 'Breadstick' },
    { value: 'Biscotti', label: 'Biscotti' },
    { value: 'Fougasse', label: 'Fougasse' },
    { value: 'Lefse', label: 'Lefse' },
    { value: 'Melonpan', label: 'Melonpan' },
    { value: 'Naan', label: 'Naan' },
    { value: 'Panbrioche', label: 'Panbrioche' },
    { value: 'Rewena', label: 'Rewena' },
    { value: 'Shirmal', label: 'Shirmal' },
    { value: 'Tunnbröd', label: 'Tunnbröd' },
    { value: 'Vánočka', label: 'Vánočka' },
    { value: 'Zopf', label: 'Zopf' },
  ];

  const Control = ({ children, ...props }) => {
    return (
      <components.Control {...props} className="form-floating">
        {children}
        <label>{label}</label>
      </components.Control>
    );
  };

  return <Select classNamePrefix="react-select" components={{ Control }} options={options} value={value} onChange={setValue} placeholder="" />;
};

export default SelectFloatingLabel;
