import React, { Component } from 'react';

class InstructorItem extends Component {
  render() {
    return (
      <li>
        <h3>{ this.props.instructor.name }</h3>
        <img src={ this.props.instructor.avatar } />
      </li>
    );
  }
}

export default InstructorItem;
