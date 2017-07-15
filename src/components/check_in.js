import React, { Component } from 'react';
import SearchBar from './search_bar';
import InstructorList from './instructor_list';

export default class CheckIn extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <InstructorList />
      </div>
    );
  }
}
