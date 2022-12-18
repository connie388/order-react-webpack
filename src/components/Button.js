import React from "react";
import "../styles/app.css";
const Button = ({
  type = "button",
  className,
  onClick,
  children,
  variant = "primary",
  ...rest // anythings such as disabled, className etc
}) => (
  <div className={className}>
    <button className={variant} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  </div>
);

export default Button;
