import React from "react";
import "./button.scss";

// Import Components
import Icon from "../../components/icon";

const Button = ({ className, icon, title, ...props }) => (
  <button className={className} {...props}>
    {icon && <Icon name={icon} />}
    {title}
  </button>
);

export default Button;
