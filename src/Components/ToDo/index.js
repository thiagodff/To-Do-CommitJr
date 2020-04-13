import React, { useState, useEffect } from 'react';

import './styles.css';

export default function Dashboard ({ item }) {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    let checkBox = document.getElementById(item.id);

    checkBox.checked = check;
  }, [check, item])

  return (
    <div id="ToDoWrapper" onClick={() => setCheck(!check)}>
      <div id="ToDoDescription">
        <input type="checkbox" id={item.id} name="toDo" />
        {check ? (
          <p id="NoChecked">{item.title}</p>
        ) :
          (
            <p id="Checked">{item.title}</p>
          )}
      </div>

      <div id="TagDescription">

        {item.tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
