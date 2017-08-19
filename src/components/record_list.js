import React, { Component } from 'react';
import { fetchRecords } from '../actions';
import RecordDeleteButton from './record_delete_btn';
import { connect } from 'react-redux';
import moment from 'moment';

class RecordList extends Component {
  componentDidMount() {
    this.props.fetchRecords('');
  }

  renderRecords() {
    return this.props.records.map((record, index) => {
        const role = record.role;
        const date = record.date;
        const className = record.className;
        const rowClassName = record.isNew ? "text-success" : ""
        return (
          <tr key={index} className={ rowClassName }>
            <td>{ index + 1 }</td>
            <td>{ new moment(date).format('YYYY-MM-DD') }</td>
            <td>{ className.toUpperCase() }</td>
            <td>{ role.charAt(0).toUpperCase() + role.slice(1) }</td>
            <td>
              <RecordDeleteButton recordId={record._id} />
            </td>
          </tr>
        );
    });
  }

  render() {
    const { records } = this.props;
    if (!records) {
      return (<div>Loading ... </div>);
    }

    return (
      <div className="RecordList">
        <table className="table table-striped table-hover">
          <thead>
            <tr className="bg-primary text-white">
              <th>#</th>
              <th>Date</th>
              <th>Class</th>
              <th>Role</th>
              <th></th>
              </tr>
          </thead>
          <tbody>
              {this.renderRecords()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ records }) {
  return { records };
}

export default connect(mapStateToProps, { fetchRecords })(RecordList);
