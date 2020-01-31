import React from 'react';
import PropTypes from 'prop-types';
import './app-header.css';

const AppHeader = ({ todo, done }) => (
  <div className="d-flex app-header">
    <h1>Todo List</h1>
    <h2>
      { `${done} ` }
      done,
      { ` ${todo} ` }
      to go
    </h2>
  </div>
);

AppHeader.propTypes = {
  todo: PropTypes.number.isRequired,
  done: PropTypes.number.isRequired,
};

export default AppHeader;
