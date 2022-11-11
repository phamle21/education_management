import React from 'react';
import { components } from 'react-select';

import AsyncSelect from 'react-select/async';
import axios from 'axios';
import { SERVICE_URL } from 'config.js';

const SelectServerSide = () => {
  const fetchData = async (inputValue) => {
    return (await axios.get(`${SERVICE_URL}/products`, { params: { term: inputValue } })).data;
  };

  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(fetchData(inputValue));
      }, 1000);
    });

  const formatOptionLabel = ({ name, description }) => (
    <div>
      <div className="clearfix" />
      <div>{name}</div>
      {description && <div className="text-muted">{description}</div>}
    </div>
  );
  const MultiValueLabel = (props) => {
    const {
      data: { name },
    } = props;
    return <components.MultiValueLabel {...props}>{name}</components.MultiValueLabel>;
  };

  // hack for isMulti & AsyncSelect bugs react-select v.4.3.1
  const getOptionValue = (option) => {
    return option.name;
  };

  return (
    <AsyncSelect
      cacheOptions={false}
      isMulti
      defaultOptions
      classNamePrefix="react-select"
      loadOptions={promiseOptions}
      formatOptionLabel={formatOptionLabel}
      getOptionValue={getOptionValue}
      components={{ MultiValueLabel }}
    />
  );
};

export default SelectServerSide;
