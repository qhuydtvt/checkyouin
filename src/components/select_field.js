import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default function (field) {
  const { meta: {touched, error} } = field;
  const className = `form-group ${touched && error ? "has-danger": ""}`;
  const type = field.type ? field.type : "";
  const options = field.options;
  return (
    <div className={className}>
      <label>{field.label}</label>
      <Select
        name={field.name}
        value={field.value}
        options={options}
        {...field.input} onBlur={() => field.input.onBlur(field.value)}
      />
      <div className="text-help">
        {touched ? error : ""}
      </div>
    </div>
  );
}
