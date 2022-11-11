import React, { useState } from 'react';
import ReactTags from 'react-tag-autocomplete';

const TagsBasic = () => {
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
      <ReactTags tags={tags} allowNew onDelete={onTagDelete} onAddition={onTagAddition} placeholderText="" />
    </>
  );
};

export default TagsBasic;
