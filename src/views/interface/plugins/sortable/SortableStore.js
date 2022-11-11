import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

const SortableStore = () => {
  const [list, setList] = useState([
    {
      title: '1. Dragée carrot cake chupa',
      id: 1,
    },
    {
      title: '2. Bear claw sweet icing',
      id: 2,
    },
    {
      title: '3. Chocolate cake halvah candy',
      id: 3,
    },
    {
      title: '4. Cake brownie oat cake',
      id: 4,
    },
  ]);
  return (
    <ReactSortable
      list={list}
      setList={(listSorted) => setList(listSorted)}
      tag="ul"
      className="list-group"
      store={{
        get: (sortable) => {
          const order = localStorage.getItem(sortable.options.group.name);
          return order ? order.split('|') : [];
        },
        set: (sortable) => {
          const order = sortable.toArray();
          localStorage.setItem(sortable.options.group.name, order.join('|'));
        },
      }}
    >
      {list.map((item) => (
        <li key={`sortable_store_${item.id}`} className="list-group-item cursor-default">
          {item.title}
        </li>
      ))}
    </ReactSortable>
  );
};

export default SortableStore;
