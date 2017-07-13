import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import InstructorItem from './instructor_item';

class InstructorList extends Component {
  renderInstructors() {
    return _.map(this.props.instructors, instructor => {
      return <InstructorItem instructor={instructor} />
    });
  }

  render() {
    if (!this.props.instructors) {
      return <div>Loading...</div>;
    }

    return (
      <ul className="col-md-4 list-group">
        {this.renderInstructors()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { instructors: state.instructors };
}

export default connect(mapStateToProps)(InstructorList);
