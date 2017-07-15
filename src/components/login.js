import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../actions'

class Login extends Component {
  renderField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? "has-danger": ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type={field.type} {...field.input}/>
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.login(values, () => {
        this.props.history.push("/checkin");
    });
  }

  componentWillReceiveProps(nextProps) {
      const loginReducer = nextProps.loginReducer;
      if (loginReducer.result === 1) {
          this.props.history.replace("/checkin");
      }
  }

  render() {
    const {handleSubmit} = this.props;
    const {loginReducer} = this.props;
    return (
      <div className="center-block login-wrapper">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="login-form" >
          <Field
            label="Username"
            name="username"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Password"
            name="password"
            type="password"
            component={this.renderField}
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
