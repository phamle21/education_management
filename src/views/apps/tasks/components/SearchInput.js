import React, { useState } from 'react';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const SearchInput = ({ onChange }) => {
  const [value, setValue] = useState('');

  return (
    <>
      <input
        className="form-control search"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Search"
      />
      {value && value.length > 0 ? (
        <span
          className="search-delete-icon"
          onClick={() => {
            setValue('');
            onChange('');
          }}
        >
          <CsLineIcons icon="close" />
        </span>
      ) : (
        <span className="search-magnifier-icon pe-none">
          <CsLineIcons icon="search" />
        </span>
      )}
    </>
  );
};

export default SearchInput;
