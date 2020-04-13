import React from 'react';

import ToDo from '../ToDo';

import './styles.css';

export default function Dashboard ({ items, handleRemove }) {
  return (
    <div id="List">
      {items.map(item => (
        <ToDo key={item.id} item={item} handleRemove={(toDoList) => handleRemove(toDoList)} />
      ))}
    </div>
  );
}
