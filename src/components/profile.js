import React, { Component } from 'react';

import { fetchCurrentUser } from "../actions";
import { connect } from 'react-redux';
import UserDetail from './user_detail';
import CheckIn from './check_in';

class Profile extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    const {user} = this.props;

    if (!user) {
      return <div>Loading...</div>;
    }

    return (
      <div className="row">
        <div className="center-block profile-block">
          <UserDetail user={ user } />
          <CheckIn />
        </div>
      </div>
    );
  }
}

function mapStateToProps({user}) {
  return {user};
}

export default connect(mapStateToProps, { fetchCurrentUser })(Profile);
