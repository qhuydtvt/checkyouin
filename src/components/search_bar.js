import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchRecords, clearRecords } from "../actions";

class SearchBar extends Component {

  onInputChange(term) {
    this.props.clearRecords();
    this.props.fetchRecords(term.toLowerCase() == 'all' ? '' : term);
  }

  render() {
    const onInputChangeWithThrottle = _.debounce(term => {
      this.onInputChange(term);
    },
    300);
    return (
      <div>
        <input type="text" placeholder='Search for a class' onChange={event => onInputChangeWithThrottle(event.target.value)} />
      </div>
    );
  }
}

export default connect(null, { fetchRecords, clearRecords })(SearchBar);
