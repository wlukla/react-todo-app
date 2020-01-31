import React from 'react';
import PropTypes from 'prop-types';
import './search-panel.css';

const SearchPanel = (props) => (
  <input
    className="form-control mr-2 d-flex p-2 search-input"
    type="text"
    placeholder="Start typing task name..."
    onChange={(e) => props.onSearchChange(e.target.value)}
  />
);

SearchPanel.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchPanel;
