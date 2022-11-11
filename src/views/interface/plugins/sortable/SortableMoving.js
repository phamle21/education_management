import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

export const SortableMovingFirst = () => {
  const [listFirst, setListFirst] = useState([
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
    <ReactSortable
      list={listFirst}
      setList={(listSorted) => setListFirst(listSorted)}
      tag="ul"
      className="list-group"
      group={{
        name: 'groupFirst',
        put: ['groupSecond'],
      }}
    >
      {listFirst.map((item) => (
        <li key={`sortable_first_${item.id}`} className="list-group-item cursor-default">
          {item.title}
        </li>
      ))}
    </ReactSortable>
  );
};

export const SortableMovingSecond = () => {
  const [listFirst, setListFirst] = useState([
    {
      title: 'Gingerbread topping cookie cotton candy',
      id: 5,
    },
  ]);
  return (
    <ReactSortable
      list={listFirst}
      setList={(listSorted) => setListFirst(listSorted)}
      tag="ul"
      className="list-group"
      group={{
        name: 'groupSecond',
        put: ['groupFirst'],
      }}
    >
      {listFirst.map((item) => (
        <li key={`sortable_second_${item.id}`} className="list-group-item cursor-default">
          {item.title}
        </li>
      ))}
    </ReactSortable>
  );
};
