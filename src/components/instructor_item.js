import React, { Component } from 'react';

class InstructorItem extends Component {
  render() {
    return (
      <li className="list-group-item instructor-item" >
        <h5>{ this.props.instructor.name }</h5>
        <img src={ this.props.instructor.avatar } />
      </li>
    );
  }
}

export default InstructorItem;
