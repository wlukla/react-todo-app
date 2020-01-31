import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({
  todoList, onDeleted, onToggleImportant, onToggleDone,
}) => {
  const todos = todoList.map(({
    label, important, id, done,
  }) => (
    <li key={id} className="list-group-item">
      <TodoListItem
        label={label}
        important={important}
        done={done}
        onDeleted={() => onDeleted(id)}
        onToggleImportant={() => onToggleImportant(id)}
        onToggleDone={() => onToggleDone(id)}
      />
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
  onDeleted: PropTypes.func.isRequired,
  onToggleImportant: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
};

export default TodoList;
