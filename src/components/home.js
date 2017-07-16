import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import Login from './login';

import { loadTokenFromStorage } from '../actions';

class Home extends Component {

  componentDidMount() {
    this.props.loadTokenFromStorage();
  }

  render() {
    const { loginReducer } = this.props;
    if (loginReducer.token) {
      return <Profile />;
    } else {
      return <Login />;
    }
  }
}

function mapStateToProps({login}) {
  return {loginReducer: login};
}

export default connect(mapStateToProps, { loadTokenFromStorage })(Home);
