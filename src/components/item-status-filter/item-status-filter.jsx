import React from 'react';
import PropTypes from 'prop-types';

export default class ItemStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: 'all', label: 'All' },
      { name: 'active', label: 'Active' },
      { name: 'done', label: 'Done' },
    ];
    this.state = {}; // !!!
  }

  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const { filter, onFilterChange } = this.props;
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
        {buttons}
      </div>
    );
  }
}

ItemStatusFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
