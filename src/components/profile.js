import React, { Component } from 'react';

import UserDetail from './user_detail';
import UserDetailMobile from './user_detail_mobile';
import CheckIn from './check_in';
import History from './history';

export default class Profile extends Component {

  render() {
    return (
      <div>
        <UserDetailMobile/>
        <div className="wrapper container">
          <div className="row">
            <div className="col-md-3 d-none d-md-block">
              <UserDetail/>
            </div>
            <div className="col-md-9 col-xs-12">
              <CheckIn />
              <hr />
              <History />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
