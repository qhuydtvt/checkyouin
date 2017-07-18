import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser, logout } from '../actions';
import Stats from './stats';

class UserDetail extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  onLogout() {
    this.props.logout();
  }

  render() {
    if (!this.props.user) {
      return <div>Loading...</div>;
    }

    const {displayName, avatar} = this.props.user;
    return (
      <div className="user-detail">
        <img src={avatar} />
        <h4 className='m-t-1'>{ displayName }</h4>
        <div>
            <div>Records today: </div>
            <Stats />
        </div>
        <button className="btn btn-default m-t-1" onClick={this.onLogout.bind(this)}>Log out</button>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, { fetchCurrentUser, logout })(UserDetail);
