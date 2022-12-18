import React from "react";
import "../styles/app.css";
const InputField = ({
  className = "form-control", // default form-control, or overwrite with inline-form-control
  value = "",
  label,
  name,
  placeholder,
  type, // text, number, email, password, checkbox
  onChange,
  isChecked, // for checkbox only
  children, // any children
  ...rest // catch the rest
}) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}

    <input
      type={type}
      value={value}
      name={name}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      checked={isChecked}
      {...rest}
    />

    {children && <div className={className}>{children}</div>}
  </div>
);

export default InputField;
