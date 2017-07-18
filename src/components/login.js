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
    const className = `form-group ${touched && error ? "has-danger": ""}`;
    return (
      <div className={className}>
        <label>{field.label} </label>
        <div>
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
    const messageClassName = loginReducer.result == 1 ? "text-success" : "text-danger";
    return (
      <div className='row'>
      <div className="mx-auto col-sm-4"> </div>
      <div className="mx-auto col-sm-4">
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
          <button type="submit" className="btn btn-success btn-block login-button">Login</button>
        </form>
        {loginReducer.isLoading &&
            <ReactLoading className='center-block' type='bubbles' color="#444" />
        }
        {loginReducer.message &&
          <div className={messageClassName}>{loginReducer.message}</div>
        }
      </div>
      <div className="mx-auto col-sm-4"> </div>
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
