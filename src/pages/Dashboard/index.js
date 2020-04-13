import React, { useState, useEffect } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";

import List from "../../Components/List";

import "./styles.css";

export default function Dashboard () {
  const [toDoList, setToDoList] = useState([]);
  const [items, setItems] = useState([]);
  const [toDo, setToDo] = useState("");
  const [tags, setTags] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const findTodos = localStorage.getItem('@Commit/ToDo');

    if (findTodos) {
      setToDoList(JSON.parse(findTodos));
    }
  }, []);

  useEffect(() => {
    setItems(toDoList);
    localStorage.setItem('@Commit/ToDo', JSON.stringify(toDoList));
  }, [toDoList]);

  function handleSubmitToDo (e) {
    e.preventDefault();
    let id = 0;

    const lastTodo = toDoList[toDoList.length - 1];

    if (lastTodo) {
      id = lastTodo.id + 1;
    }

    setToDoList([...toDoList, {
      id,
      title: toDo,
      tags: tags.split(" ")
    }]);

    setToDo('');
    setTags('');
  }

  function handleSearch (e) {
    e.preventDefault();

    if (search === "") {
      setItems(toDoList);
    } else {
      const filterTags = toDoList.filter(toDo => {
        const findTag = toDo.tags.filter(tag => tag === search);

        return findTag.length !== 0;
      })

      setItems(filterTags);
      setSearch('');
    }
  }

  return (
    <div id="container">
      <h1>To-Do List</h1>
      <form id="Submit" onSubmit={handleSubmitToDo}>
        <input
          type="text"
          placeholder="Digite uma nova to-do"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
        />

        <div>
          <input
            type="text"
            placeholder="Adicione tags para to-do"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <button type="submit">
            <FaPlus size={15} color="#fff" />
          </button>
        </div>
      </form>

      <form id="Search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Procure um to-do por tag"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <FaSearch size={15} color="#fff" />
        </button>
      </form>

      <List items={items} />
    </div>
  );
}
