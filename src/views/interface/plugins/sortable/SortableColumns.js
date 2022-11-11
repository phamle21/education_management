import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const SortableColumns = () => {
  const [list, setList] = useState([
    {
      icon: 'pepper',
      title: 'Pepper',
      id: 1,
    },
    {
      icon: 'banana',
      title: 'Banana',
      id: 2,
    },
    {
      icon: 'pear',
      title: 'Pear',
      id: 3,
    },
    {
      icon: 'radish',
      title: 'Radish',
      id: 4,
    },
  ]);
  return (
    <ReactSortable list={list} setList={(listSorted) => setList(listSorted)} tag="div" className="row g-2">
      {list.map((item) => (
        <div className="col-12 col-sm-3" key={`sortable_column_${item.id}`}>
          <div className="card sh-16">
            <div className="card-body text-center d-flex flex-column justify-content-center align-items-center">
              <CsLineIcons icon={item.icon} width="20" height="20" className="cs-icon icon text-primary mb-3" />
              <p className="mb-0 text-muted">{item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </ReactSortable>
  );
};

export default SortableColumns;
