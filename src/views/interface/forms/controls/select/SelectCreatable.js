import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

const SelectCreatable = () => {
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

  return <CreatableSelect classNamePrefix="react-select" isMulti isClearable={false} options={options} value={value} onChange={setValue} placeholder="" />;
};

export default SelectCreatable;
