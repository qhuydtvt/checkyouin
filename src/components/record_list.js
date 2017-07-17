import React, { Component } from 'react';
import { fetchRecords } from '../actions';
import { connect } from 'react-redux';

class RecordList extends Component {
  componentDidMount() {
    this.props.fetchRecords('');
  }

  renderPastRecords() {
    return this.props.record.pastRecords.map(function(record, index) {
        const role = record.role;
        const date = record.date;
        const className = record.className;
        return (
          <tr key={index}>
            <td>{ index + 1 }</td>
            <td>{ date.substring(0, 10) }</td>
            <td>{ className.toUpperCase() }</td>
            <td>{ role.charAt(0).toUpperCase() + role.slice(1) }</td>
          </tr>
        );
    });
  }

  render() {
    const { record } = this.props;
    if (!record.pastRecords) {
      return <div>Loading ... </div>;
    }

    return (
      <div>
        <table className="table m-t-1">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Class</th>
              <th>Role</th>
              </tr>
          </thead>
          <tbody>
              {this.renderPastRecords()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ record }) {
  return { record };
}

export default connect(mapStateToProps, { fetchRecords })(RecordList);
