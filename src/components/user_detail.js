import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser, logout } from '../actions';

class UserDetail extends Component {
  componentDidMount() {
      this.props.fetchCurrentUser();
  }

  renderStats() {
    const {todayRecordsStat} = this.props.user;
    return todayRecordsStat.map(function(stat) {
      const className = stat._id;
      const count = stat.count;
      return (
        <div key={className}>
          <span>{className.toUpperCase()}: </span>
          <strong>{stat.count}</strong>
        </div>
      );
    });
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
            {this.renderStats()}
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
