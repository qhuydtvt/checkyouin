import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import renderInputField from './input_field';
import renderSelectField from './select_field';
import { addRecord } from '../actions';

class CheckIn extends Component {
  onSubmit(values) {
    const {date} = values;
    const valuesToSubmit = {...values, "role": values.role.value, "date":date?date:new Date().toISOString().substring(0,10)};
    this.props.addRecord(valuesToSubmit);
  }

  render() {
    const { handleSubmit, record } = this.props;

    const roleOptions = [
      {value: "instructor", label:"Instructor"},
      {value: "coach", label:"Coach"},
      {value: "other", label:"Other"}
    ];

    const resultTextClassName = (record.addRecordResult == 1) ? "text-success" : "text-danger";
    return (
      <div className="form-check-in">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Class"
            type="text"
            name="className"
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
        {record.addRecordMessage &&
          <div className={`${resultTextClassName} default-margin`}>{record.addRecordMessage}</div>
        }
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.className) {
    errors.className = "Class is empty";
  }
  if (!values.role) {
    errors.role = "Role is empty";
  }
  return errors;
}

function mapStateToProps(state) {
  return { record: state.record };
}

export default reduxForm({
  validate,
  form: "checkInForm"}
)(connect(mapStateToProps, { addRecord })(CheckIn));
