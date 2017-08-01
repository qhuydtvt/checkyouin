import React, { Component } from 'react';

import UserDetail from './user_detail';
import CheckIn from './check_in';
import History from './history';


export default class Profile extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-3">
            <UserDetail/>
          </div>
          <div className="col-sm-9">
            <CheckIn />
            <hr />
            <History />
          </div>
        </div>
      </div>
    );
  }
}
