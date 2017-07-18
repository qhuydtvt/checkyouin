import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRecord, fetchStats } from '../actions';

class RecordDeleteButton extends Component {
  onDelete() {
    this.props.deleteRecord(this.props.recordId, () => { this.props.fetchStats(); });
  }

  render() {
    return (
      <button className="btn btn-danger btn-sm" onClick={this.onDelete.bind(this)}>
        Delete
      </button>
    );
  }
}

export default connect(null, { deleteRecord, fetchStats })(RecordDeleteButton);
