import React from 'react';
import PropTypes from 'prop-types';
import './search-panel.css';

const SearchPanel = (props) => (
  <div className="d-flex p-2">
    <input
      className="form-control search-input mr-2"
      type="text"
      placeholder="Start typing task name..."
      onChange={(e) => props.onSearchChange(e.target.value)}
    />
  </div>
);

SearchPanel.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchPanel;
