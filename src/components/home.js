import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckIn from './check_in';
import Login from './login';

class Home extends Component {
  render() {
    const token = localStorage.getItem("token");
    const tokenAddedTime = localStorage.getItem("token_added_time");
    const dayPassed = token ? ((Date.now() - tokenAddedTime) / 86400000) : -1;
    return (token && dayPassed <= 7)? <CheckIn /> : <Login />
  }

  componentWillReceiveProps(newProps) {
    const {loginReducer} = newProps;
    if (loginReducer && loginReducer.token) {
      localStorage.setItem("token", loginReducer.token);
      localStorage.setItem("token_added_time", Date.now());
    }
  }
}

function mapStateToProps({login}) {
  return {loginReducer: login};
}

export default connect(mapStateToProps)(Home);
