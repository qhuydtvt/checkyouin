import React, { Component } from 'react';

import SearchBar from './search_bar';
import RecordList from './record_list';
import DialogBox from './dialog';

class History extends Component {
  render() {
    return (
      <div>
        <div className="row mb-3">
          <h4 className="col-lg-4 col-md-6">History</h4>
          <SearchBar className="col-lg-4 ml-auto col-md-6"/>
        </div>
        <div className="mb-3"><RecordList/></div>
        <DialogBox />
      </div>
    );
  }
}

export default History;
