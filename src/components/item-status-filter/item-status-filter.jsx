import React from 'react';
import PropTypes from 'prop-types';

const ItemStatusFilter = (props) => {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  const buttonsDisplay = buttons.map(({ name, label }) => {
    const { filter, onFilterChange } = props;
    const classNames = name === filter ? 'btn btn-primary' : 'btn btn-outline-secondary';
    return (
      <button
        type="button"
        className={classNames}
        key={name}
        onClick={() => onFilterChange(name)}
      >
        {label}
      </button>
    );
  });

  return (
    <div className="btn-group">
      {buttonsDisplay}
    </div>
  );
};

ItemStatusFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default ItemStatusFilter;
