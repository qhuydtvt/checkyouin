import React from 'react';

export default function(field) {
  const { meta: {touched, error} } = field;
  const className = `form-group ${touched && error ? "has-danger": ""}`;
  const type = field.type ? field.type : "";
  const value = (type == "date") ? new Date().toISOString().substring(0,10): "";
  return (
    <div className={className}>
      <label>{field.label}</label>
      <input className="form-control" type={type} {...field.input}/>
      <div className="text-help">
        {touched ? error : ""}
      </div>
    </div>
  );
}
