import React, { useState } from 'react';
import Select from 'react-select';

const SelectBasic = () => {
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
  return <Select classNamePrefix="react-select" options={options} value={value} onChange={setValue} placeholder="" />;
};

export default SelectBasic;
