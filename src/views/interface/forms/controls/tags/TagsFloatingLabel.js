import React, { useState } from 'react';
import ReactTags from 'react-tag-autocomplete';

const TagsFloatingLabel = ({ label }) => {
  const [tags, setTags] = useState([]);

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

  return (
    <>
      <div className={`form-floating ${tags.length > 0 ? 'tag-added' : 'tag-not-added'}`}>
        <ReactTags tags={tags} allowNew onDelete={onTagDelete} onAddition={onTagAddition} placeholderText="" />
        <label>{label}</label>
      </div>
    </>
  );
};

export default TagsFloatingLabel;
