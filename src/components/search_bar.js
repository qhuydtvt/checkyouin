import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchRecords, clearRecords } from "../actions";

class SearchBar extends Component {

  onInputChange(term) {
    this.props.clearRecords();
    this.props.fetchRecords(term.toLowerCase() === 'all' ? '' : term);
  }

  render() {
    const onInputChangeWithThrottle = _.debounce(term => {
      this.onInputChange(term);
    },
    300);
    return (
      <form className={this.props.className}>
        <input type="text" className="form-control" placeholder='Search for a class' onChange={event => onInputChangeWithThrottle(event.target.value)} />
      </form>
    );
  }
}

export default connect(null, { fetchRecords, clearRecords })(SearchBar);
