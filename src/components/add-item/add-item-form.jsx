import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class AddItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.onLabelChange = this.onLabelChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onLabelChange(e) {
    const { value } = e.target;
    this.setState(() => ({ value }));
  }

  onSubmit(e) {
    e.preventDefault();
    const { onAdd } = this.props;
    const { value } = this.state;
    onAdd(value);
    this.setState(() => ({ value: '' }));
  }

  render() {
    const { value } = this.state;
    return (
      <form
        className="d-flex p-2"
        onSubmit={this.onSubmit}
      >
        <input
          className="form-control search-input mr-2"
          type="text"
          placeholder="Add task"
          onChange={this.onLabelChange}
          value={value}
        />
        <button
          type="submit"
          className="btn btn-primary"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    );
  }
}

AddItemForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddItemForm;
