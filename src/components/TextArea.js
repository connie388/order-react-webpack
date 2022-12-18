import React from "react";
import "../styles/app.css";
const TextArea = ({
  className = "form-control", // default form-control, or overwrite with inline-form-control
  value = "",
  label,
  name,
  placeholder,
  onChange,
  rows = 4,
  ...rest // catch the rest
}) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}

    <textarea
      value={value}
      name={name}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      rows={rows}
      {...rest}
    />
  </div>
);

export default TextArea;
