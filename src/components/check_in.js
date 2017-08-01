import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addRecord, fetchStats } from '../actions';

import 'react-select/dist/react-select.css';
import { Creatable } from 'react-select';

import 'flatpickr/dist/themes/light.css';
import Flatpickr from 'react-flatpickr'

class CheckIn extends Component {
  onSubmit(values) {
    const {date, className} = values;
    var dateArr = [].concat(date);
    var dateString = null;
    if (dateArr[0].toISOString === 'function') {
      dateString = dateArr[0].toISOString();
    } else {
      dateString = dateArr[0];
    }
    const valuesToSubmit = {
      className: className.replace(/\s/g, ''),
      role: values.role.value,
      date: dateString
    };
    this.props.addRecord(valuesToSubmit, () => this.props.fetchStats());
  }

  renderInputField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? "has-danger": ""}`;
    const type = field.type ? field.type : "";
    return (
      <div className={`${className} col-md-4`}>
        <label>{field.label} </label>
        <input className="form-control" type={type} {...field.input}/>
        <div className="form-text text-danger">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  renderDateField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group${touched && error ? "has-danger": ""}`;

    return (
      <div className={`${className} col-md-4`}>
        <label>{field.label} </label>
        <Flatpickr className="form-control" options={{defaultDate: ['2017-07-01']}}  {...field.input}/>
        <div className="form-text text-danger">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  renderSelectField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? "has-danger": ""}`;
    const options = field.options;
    return (
      <div className={`${className} col-md-4`}>
      <label>{field.label}</label>
        <Creatable
          name={field.name}
          options={options}
          {...field.input} onBlur={() => field.input.onBlur(field.value)}
        />
        <div className="form-text text-danger">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    const roleOptions = [
      {value: "instructor", label: "Instructor"},
      {value: "coach", label: "Coach"}
    ];

    return (
        <div>
          <h4>Add new record</h4>
          <form className="row" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label="Class"
              type="text"
              name="className"
              component={this.renderInputField}
            />
            <Field
              label="Role"
              type="text"
              name="role"
              options={roleOptions}
              component={this.renderSelectField}
            />
            <Field
              label="Date"
              type="date"
              name="date"
              component={this.renderDateField}
            />
            <div className="form-group col-12">
              <button type="submit" className="btn btn-primary">Add record</button>
            </div>
          </form>
        </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.className || !values.className.replace(/\s/g, '')) {
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
  form: "checkInForm",
  initialValues: {
    date: new Date().toISOString()
  }}
)(connect(mapStateToProps, { addRecord, fetchStats })(CheckIn));
