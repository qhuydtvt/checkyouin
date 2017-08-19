import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser, logout } from '../actions';

class UserDetailMobile extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser();
    this.renderUserNav = this.renderUserNav.bind(this);
  }

  onLogout() {
    this.props.logout();
  }

  renderUserNav(){
    const {displayName} = this.props.user;

    return (
      <div className="container">
        <span className="navbar-brand">{ displayName }</span>

        <button onClick={this.onLogout.bind(this)} className="btn btn-outline-info my-2 my-sm-0">Logout</button>
      </div>
    )
  }

  render() {
    const content = this.props.user ?
        this.renderUserNav() :
        (<div className="container">Loading...</div>);



    return (
      <nav className="d-flex d-md-none navbar navbar-expand-sm navbar-dark bg-dark">
        {content}
      </nav>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, { fetchCurrentUser, logout })(UserDetailMobile);
