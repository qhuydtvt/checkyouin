import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { login, showLoginWaitIndicator, hideLoginWaitIndicator } from '../actions'

class Login extends Component {
  onSubmit(values) {
    this.props.showLoginWaitIndicator();
    this.props.login(values, () => {
      this.props.hideLoginWaitIndicator();
    });
  }

  renderInputField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group row ${touched && error ? "has-danger": ""}`;
    return (
      <div className={className}>
        <label className="col-sm-2 col-form-label">{field.label} </label>
        <div className="col-sm-10">
            <input className="form-control" type={field.type} {...field.input}/>
        </div>
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  render() {
    const {handleSubmit, loginReducer} = this.props;
    const messageClassName = loginReducer.result === 1 ? "form-text text-success" : "form-text text-danger";
    return (
      <div className='row login-modal'>
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1>Check You In</h1>
          <hr />
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="login-form" >
            <Field
              label="Username"
              name="username"
              type="text"
              component={this.renderInputField}
            />
            <Field
              label="Password"
              name="password"
              type="password"
              component={this.renderInputField}
            />
            {loginReducer.message &&
              <div className="form-group">
                <div className={messageClassName}>{loginReducer.message}</div>
              </div>
            }
            <button type="submit" disabled={loginReducer.isLoading} className="btn btn-primary btn-block login-button">Login</button>
          </form>
          {loginReducer.isLoading &&
            <ReactLoading className="mx-auto" type='bubbles' color="#444" />
          }
        </div>
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
})(connect(mapStateToProps, { login, showLoginWaitIndicator, hideLoginWaitIndicator })(Login));
