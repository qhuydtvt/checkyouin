import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import InstructorItem from './instructor_item';

class InstructorList extends Component {
  renderInstructors() {
    return _.map(this.props.instructors, instructor => {
      return <InstructorItem instructor={instructor} key={ instructor.id } />
    });
  }

  render() {
    if (!this.props.instructors) {
      return <div>Loading...</div>;
    }

    return (
      <div className="row">
        <ul className="col-md-3 list-group pull-right instructor-list">
          {this.renderInstructors()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { instructors: state.instructors };
}

export default connect(mapStateToProps)(InstructorList);
