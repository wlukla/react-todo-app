import React from 'react';
import './search-panel.css';

import ItemStatusFilter from '../item-status-filter';

const SearchPanel = () => (
  <div className="d-flex p-2">
    <input className="form-control search-input mr-2" type="text" placeholder="Start typing task name..." />
    <ItemStatusFilter />
  </div>
);

export default SearchPanel;
