import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './todo-list-item';
import './todo-list.css';

const TodoList = ({ todoList }) => {
  const todos = todoList.map(({ label, important, id }) => (
    <li key={id} className="list-group-item">
      <TodoListItem label={label} important={important} />
    </li>
  ));
  return (
    <ul className="list-group todo-list">
      { todos }
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.instanceOf(Array).isRequired,
};

export default TodoList;
