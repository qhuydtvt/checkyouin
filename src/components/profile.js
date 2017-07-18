import React, { Component } from 'react';
import Modal from 'react-modal';

import UserDetail from './user_detail';
import CheckIn from './check_in';
import History from './history';


export default class Profile extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-2">
            <UserDetail/>
          </div>
          <div className="col-sm-9">
            <CheckIn />
            <History />
          </div>
        </div>
      </div>
    );
  }
}
