import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRecord, fetchStats, showConfirmDialog } from '../actions';

class RecordDeleteButton extends Component {
  onDelete() {
    const onConfirm = (() => {
      this.props.deleteRecord(this.props.recordId, () => { this.props.fetchStats(); });
    }).bind(this);

    this.props.showConfirmDialog(onConfirm);
  }

  render() {
    return (
      <button className="btn btn-danger btn-sm" onClick={this.onDelete.bind(this)}>
        Delete
      </button>
    );
  }
}

export default connect(null, { deleteRecord, fetchStats, showConfirmDialog })(RecordDeleteButton);
