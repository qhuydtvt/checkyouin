import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchInstructors } from '../actions';
import _ from 'lodash';

class SearchBar extends Component {
  componentDidMount() {
    this.props.searchInstructors('');  
  }

  onSearchTermChange(term) {
    this.props.searchInstructors(term);
  }

  render() {
    const searchWithThrottle = _.debounce(term => {
      this.onSearchTermChange.bind(this)(term);
    }, 300);

    return (
      <div className="search-bar">
        <input onChange= {event => searchWithThrottle(event.target.value)} />
      </div>
    );
  }
}

export default connect(null, { searchInstructors })(SearchBar);
