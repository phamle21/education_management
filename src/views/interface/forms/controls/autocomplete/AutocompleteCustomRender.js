import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';
import createTrie from 'autosuggest-trie';
import axios from 'axios';
import { SERVICE_URL } from 'config.js';

const AutocompleteCustomRender = () => {
  const [valueState, setValueState] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${SERVICE_URL}/users`).then((res) => {
      setData(res.data);
    });
  }, []);

  const escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  const getSuggestions = (value) => {
    const escapedValue = escapeRegexCharacters(value.trim());
    if (escapedValue === '') {
      return [];
    }
    // Small plugin to search both at the start of the first and last name
    const trie = createTrie(data, 'name');
    return trie.getMatches(escapedValue);
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

  const renderSuggestion = (suggestion) => {
    const { name = '', thumb = '' } = suggestion;
    return (
      <Row className="g-0 position-relative">
        <Col xs="auto">
          <img src={thumb} alt={name} className="sw-3 me-2 rounded-xl" />
        </Col>
        <Col className="d-flex align-items-center">
          <div className="stretched-link body-link">{name}</div>
        </Col>
      </Row>
    );
  };

  const renderInputComponent = (props) => <input {...props} className="form-control" />;

  if (!data) {
    return <></>;
  }

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      focusInputOnSuggestionClick={false}
      inputProps={{
        placeholder: '',
        value: valueState,
        onChange: changeInput,
        className: 'form-control',
      }}
      renderInputComponent={renderInputComponent}
    />
  );
};
export default AutocompleteCustomRender;
