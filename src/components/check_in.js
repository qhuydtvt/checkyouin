import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addRecord, fetchStats } from '../actions';

import 'react-select/dist/react-select.css';
import Select, { Creatable } from 'react-select';

import 'flatpickr/dist/themes/light.css';
import Flatpickr from 'react-flatpickr'


class CheckIn extends Component {
  onSubmit(values) {
    const {date} = values;
    const valuesToSubmit = {...values, "role": values.role.value, "date":date?date:new Date().toISOString().substring(0,10)};
    this.props.addRecord(valuesToSubmit, () => this.props.fetchStats());
  }

  renderInputField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? "has-danger": ""}`;
    const type = field.type ? field.type : "";
    const value = (type == "date") ? new Date().toISOString().substring(0,10): "";
    return (
      <div className={`${className} col-sm-3`}>
        <label className='col-sm-3' >{field.label} </label>
        <div className='col-sm-9'>
            <input className="form-control" type={type} {...field.input}/>
            <div className="text-help">
              {touched ? error : ""}
            </div>
        </div>
      </div>
    );
  }

  renderDateField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group${touched && error ? "has-danger": ""}`;
    const type = field.type ? field.type : "";
    const value = (type == "date") ? new Date().toISOString().substring(0,10): "";

    return (
      <div className={`${className} col-sm-3`}>
        <label className="col-sm-3">{field.label} </label>
        <div className='col-sm-9'>
            <Flatpickr className="form-control" options={{defaultDate: ['2017-07-01']}}  {...field.input}/>
        </div>
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  renderSelectField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? "has-danger": ""}`;
    const type = field.type ? field.type : "";
    const options = field.options;
    return (
      <div className={`${className} col-sm-3`}>
        <label className='col-sm-3'>{field.label}</label>
        <div className='col-sm-9'>
          <Creatable
            name={field.name}
            options={options}
            {...field.input} onBlur={() => field.input.onBlur(field.value)}
          />
          <div className="text-help">
            {touched ? error : ""}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit, record } = this.props;

    const roleOptions = [
      {value: "instructor", label: "Instructor"},
      {value: "coach", label: "Coach"}
    ];

    const resultTextClassName = (record.addRecordResult == 1) ? "text-success" : "text-danger";
    return (
        <div className="row card p-x-1 p-y-1">
          <h4>Add new record</h4>
          <form className='m-t-1' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
            <button type="submit" className="btn btn-success">Add record</button>
          </form>
          {record.addRecordMessage &&
            <div className={`${resultTextClassName} m-t-1`}>{record.addRecordMessage}</div>
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
  form: "checkInForm",
  initialValues: {
    date: new Date()
  }}
)(connect(mapStateToProps, { addRecord, fetchStats })(CheckIn));
