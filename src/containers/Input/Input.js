import React from "react";
import { useState } from "react";
const Input = (props) => {
  const [value, setValue] = useState(props.value);
  const handleValueChange = (val) => {
    setValue(val);
    props.valueChanged && props.valueChanged(val);
  };

  return (
    <React.Fragment>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input
        className="form-control"
        id={props.id}
        aria-describedby={props.describe}
        placeholder={props.placeholder}
        value={value}
        type={props.type}
        onChange={(e) => {
          handleValueChange(e.target.value);
        }}
      />
    </React.Fragment>
  );
};

export default Input;
