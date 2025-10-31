import React from "react";

const SelectField = (props) => {


  const { label, name, options, required } = props;
  
  return (
  <div className="select-field">
    <label htmlFor={name}>
      {label}
      {required && <span>*</span>}
    </label>
    <select id={name} name={name} required={required}>
      <option value="">Select...</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
)};

export default SelectField;
