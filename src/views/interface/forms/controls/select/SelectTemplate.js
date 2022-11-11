import React, { useState } from 'react';
import Select from 'react-select';

const SelectTemplate = () => {
  const [value, setValue] = useState();

  const options = [
    { value: 'Breadstick', label: 'Breadstick', color: 'border-primary' },
    { value: 'Biscotti', label: 'Biscotti', color: 'border-secondary' },
    { value: 'Fougasse', label: 'Fougasse', color: 'border-tertiary' },
    { value: 'Lefse', label: 'Lefse', color: 'border-quaternary' },
    { value: 'Melonpan', label: 'Melonpan', color: 'border-success' },
    { value: 'Naan', label: 'Naan', color: 'border-danger' },
    { value: 'Panbrioche', label: 'Panbrioche', color: 'border-info' },
    { value: 'Rewena', label: 'Rewena', color: 'border-warning' },
  ];
  const formatOptionLabel = ({ label, color }) => (
    <div>
      <span className={`align-middle d-inline-block option-circle me-2 rounded-xl border ${color}`} />
      <span className="align-middle d-inline-block lh-1">{label}</span>
    </div>
  );

  return <Select classNamePrefix="react-select" options={options} formatOptionLabel={formatOptionLabel} value={value} onChange={setValue} placeholder="" />;
};

export default SelectTemplate;
