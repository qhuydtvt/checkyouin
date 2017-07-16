import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import renderInputField from './input_field';
import renderSelectField from './select_field';

class CheckIn extends Component {
  onSubmit(values) {
    const {date} = values;
    const valuesToSubmit = {...values, "date":date?date:new Date().toISOString().substring(0,10)};
    console.log(valuesToSubmit);
  }

  render() {
    const {handleSubmit} = this.props;
    const roleOptions = [
      {value: "instructor", label:"Instructor"},
      {value: "coach", label:"Coach"},
      {value: "other", label:"Other"}
    ];
    return (
      <div className="form-check-in">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Class"
            type="text"
            name="class"
            component={renderInputField}
          />
          <Field
            label="Role"
            type="text"
            name="role"
            options={roleOptions}
            component={renderSelectField}
          />
          <Field
            label="Date"
            type="date"
            name="date"
            component={renderInputField}
          />
          <button type="submit" className="btn btn-success">Check you in</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  return errors;
}

function mapStateToProps(state) {
  return {user: state.user};
}

export default reduxForm({validate, form:"CheckinForm"})(connect(mapStateToProps)(CheckIn));
