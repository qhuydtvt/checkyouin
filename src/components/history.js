import React, { Component } from 'react';

import SearchBar from './search_bar';
import RecordList from './record_list';
import DialogBox from './dialog';

class History extends Component {
  render() {
    return (
      <div>
        <p className="row">
          <h4 className="col-lg-4 col-md-6">History</h4>
          <SearchBar className="col-lg-4 offset-lg-4 col-md-6"/>
        </p>
        <p><RecordList/></p>
        <DialogBox />
      </div>
    );
  }
}

export default History;
