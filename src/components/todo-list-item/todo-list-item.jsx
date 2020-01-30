import React from 'react';
import PropTypes from 'prop-types';

import './todo-list-item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faExclamation } from '@fortawesome/free-solid-svg-icons';

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal',
  };


  return (
    <span className="todo-list-item">
      <span
        style={style}
        className="todo-list-item-label"
      >
        { label }
      </span>
      <button type="button" className="btn btn-outline-danger btn-sm float-right">
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>

      <button type="button" className="btn btn-outline-success btn-sm float-right">
        <FontAwesomeIcon icon={faExclamation} />
      </button>
    </span>
  );
};

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  important: PropTypes.bool.isRequired,
};

export default TodoListItem;
