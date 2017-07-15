import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckIn from './check_in';
import Login from './login';

class Home extends Component {
  render() {
    const {loginReducer} = this.props;
    const token = sessionStorage.getItem("token");
    return (token)? <CheckIn /> : <Login />
  }

  componentWillReceiveProps(newProps) {
    const {loginReducer} = newProps;
    if (loginReducer && loginReducer.token) {
      console.log("Saving token");
      sessionStorage.setItem("token", loginReducer.token);
    }
  }
}

function mapStateToProps({login}) {
  return {loginReducer: login};
}

export default connect(mapStateToProps)(Home);
