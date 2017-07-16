import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../actions'

import renderField from './input_field'

class Login extends Component {
  onSubmit(values) {
    this.props.login(values, () => {
    });
  }

  render() {
    const {handleSubmit, loginReducer} = this.props;
    return (
      <div className="center-block login-wrapper">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="login-form" >
          <Field
            label="Username"
            name="username"
            type="text"
            component={renderField}
          />
          <Field
            label="Password"
            name="password"
            type="password"
            component={renderField}
          />
          <button type="submit" className="btn btn-success btn-block login-button">Login</button>
        </form>
        {loginReducer.message &&
          <div className="text-danger login-error">{loginReducer.message}</div>
        }
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = "Username is empty";
  }
  if (!values.password) {
    errors.password = "Password is empty";
  }
  return errors;
}

function mapStateToProps({ login }) {
  return { loginReducer: login };
}

export default reduxForm({
  validate: validate,
  form: "LoginForm"
})(connect(mapStateToProps, { login })(Login));
