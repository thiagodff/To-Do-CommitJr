import React, { useState, useEffect } from 'react';

import { MdClose } from 'react-icons/md'

import './styles.css';

export default function Dashboard ({ item, handleRemove }) {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    let checkBox = document.getElementById(item.id);

    checkBox.checked = check;
  }, [check, item]);

  function handleDelete () {
    const toDoList = JSON.parse(localStorage.getItem('@Commit/ToDo'));

    let removeToDo = toDoList.filter(toDo => toDo.id !== item.id);

    localStorage.setItem('@Commit/ToDo', JSON.stringify(removeToDo));

    handleRemove(removeToDo);
  }

  return (
    <div id="ToDoWrapper" onClick={() => setCheck(!check)}>
      <div id="ToDoDescription">
        <div id="ContentToDo">
          <input type="checkbox" id={item.id} name="toDo" />
          {check ? (
            <p id="NoChecked">{item.title}</p>
          ) :
            (
              <p id="Checked">{item.title}</p>
            )}
        </div>

        <button onClick={handleDelete}>
          <MdClose size={15} color="#fff" />
        </button>
      </div>


      <div id="TagDescription">

        {item.tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
