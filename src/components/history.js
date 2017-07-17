import React, { Component } from 'react';
import { fetchRecords } from '../actions';
import { connect } from 'react-redux';

import SearchBar from './search_bar';
import RecordList from './record_list';

class History extends Component {
  render() {
    return (
      <div className="row card p-x-1 p-y-1">
        <h4>History</h4>
        <div>
          <div className="col-sm-9" ></div>
          <SearchBar className="col-sm-3"/>
        </div>
        <div className='m-t-1'>
          <RecordList/>
        </div>
      </div>
    );
  }
}

export default History;
