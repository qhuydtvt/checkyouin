import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CheckIn from './components/check_in';
import Login from './components/login';
import reducers from './reducers';
import './style/style.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/index" component={CheckIn} />
        </Switch>
      </div>
    </BrowserRouter>

  </Provider>
  , document.getElementById('root'));
