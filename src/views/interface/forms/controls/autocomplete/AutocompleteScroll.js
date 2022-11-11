import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';

const products = [
  { name: 'Bammy' },
  { name: 'Baguette' },
  { name: 'Boule' },
  { name: 'Brot' },
  { name: 'Brioche' },
  { name: 'Biscuit' },
  { name: 'Breadstick' },
];

const AutocompleteScroll = () => {
  const [valueState, setValueState] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  const getSuggestions = (value) => {
    const escapedValue = escapeRegexCharacters(value.trim());
    if (escapedValue === '') {
      return [];
    }
    const regex = new RegExp(`^${escapedValue}`, 'i');
    return products.filter((product) => regex.test(product.name));
  };

  const changeInput = (event, { newValue }) => {
    setValueState(newValue);
  };

  const onSuggestionsFetchRequested = ({ value: val }) => {
    setSuggestions(getSuggestions(val));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  const renderInputComponent = (props) => <input {...props} className="form-control" />;

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      focusInputOnSuggestionClick={false}
      inputProps={{
        placeholder: 'Type b',
        value: valueState,
        onChange: changeInput,
      }}
      renderInputComponent={renderInputComponent}
    />
  );
};

export default AutocompleteScroll;
