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
      return (<div>Loading...</div>);
    }

    const {displayName, avatar} = this.props.user;
    return (
      <div className="user-detail">
        <p><img src={avatar} alt={displayName} className="rounded img-fluid" /></p>
        <h4>{ displayName }</h4>
        <Stats />
        <hr />
        <div className="form-group">
          <button className="btn btn-secondary" onClick={this.onLogout.bind(this)}>Log out</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, { fetchCurrentUser, logout })(UserDetail);
