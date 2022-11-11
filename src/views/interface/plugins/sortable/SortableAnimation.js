import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

const SortableAnimation = () => {
  const [list, setList] = useState([
    {
      title: 'Dragée carrot cake chupa',
      id: 1,
    },
    {
      title: 'Bear claw sweet icing',
      id: 2,
    },
    {
      title: 'Chocolate cake halvah candy',
      id: 3,
    },
    {
      title: 'Cake brownie oat cake',
      id: 4,
    },
  ]);
  return (
    <ReactSortable list={list} setList={(listSorted) => setList(listSorted)} tag="ul" className="list-group" animation={300}>
      {list.map((item) => (
        <li key={`sortable_animation_${item.id}`} className="list-group-item cursor-default">
          {item.title}
        </li>
      ))}
    </ReactSortable>
  );
};

export default SortableAnimation;
