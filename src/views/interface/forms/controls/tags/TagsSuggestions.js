import React, { useState } from 'react';
import ReactTags from 'react-tag-autocomplete';

const TagsSuggestions = () => {
  const [tags, setTags] = useState([]);
  const [suggestions] = useState([
    { id: 'Anpan', name: 'Anpan' },
    { id: 'Breadstick', name: 'Breadstick' },
    { id: 'Boule', name: 'Boule' },
    { id: 'Cornbread', name: 'Cornbread' },
    { id: 'Fougasse', name: 'Fougasse' },
    { id: 'Guernsey Gache', name: 'Guernsey Gache' },
    { id: 'Lefse', name: 'Lefse' },
    { id: 'Melonpan', name: 'Melonpan' },
    { id: 'Naan', name: 'Naan' },
    { id: 'Panbrioche', name: 'Panbrioche' },
    { id: 'Rewena', name: 'Rewena' },
    { id: 'Shirmal', name: 'Shirmal' },
    { id: 'Tunnbröd', name: 'Tunnbröd' },
    { id: 'Vánočka', name: 'Vánočka' },
    { id: 'Zopf', name: 'Zopf' },
  ]);

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
      <ReactTags tags={tags} onDelete={onTagDelete} suggestions={suggestions} onAddition={onTagAddition} placeholderText="" minQueryLength={1} />
    </>
  );
};

export default TagsSuggestions;
