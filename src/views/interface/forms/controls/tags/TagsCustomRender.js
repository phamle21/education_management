import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ReactTags from 'react-tag-autocomplete';
import { SERVICE_URL } from 'config.js';

const TagsCustomRender = () => {
  const [tags, setTags] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    axios.get(`${SERVICE_URL}/users`).then((res) => {
      setSuggestions(res.data);
    });
  }, []);

  const onTagDelete = (i) => {
    const newTags = [...tags];
    newTags.splice(i, 1);
    setTags(newTags);
  };

  const onTagAddition = (tag) => {
    setTags(() => {
      return [...tags, tag];
    });
  };

  const suggestionComponent = ({ item, query }) => {
    return (
      <Row className={`g-0 position-relative ${item.name === query ? 'match' : 'no-match'}`} id={item.id}>
        <Col xs="auto">
          <img src={item.thumb} alt={item.name} className="sw-3 me-2 rounded-xl" />
        </Col>
        <Col className="d-flex align-items-center">
          <div className="stretched-link body-link">{item.name}</div>
        </Col>
      </Row>
    );
  };

  return (
    <>
      <ReactTags
        tags={tags}
        onDelete={onTagDelete}
        suggestions={suggestions}
        onAddition={onTagAddition}
        placeholderText=""
        minQueryLength={1}
        suggestionComponent={suggestionComponent}
      />
    </>
  );
};

export default TagsCustomRender;
