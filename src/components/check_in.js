import React, { Component } from 'react';

import { fetchCurrentUser } from "../actions";
import { connect } from 'react-redux';

class CheckIn extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    const {user} = this.props;

    if (!user.name) {
      return <div>Loading...</div>;
    }
    
    return (
      <div>
        Hello {user.name}
      </div>
    );
  }
}

function mapStateToProps({user}) {
  return {user};
}

export default connect(mapStateToProps, { fetchCurrentUser })(CheckIn);
