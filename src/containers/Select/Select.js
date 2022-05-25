import React, { useState } from "react";
const Select = (props) => {
  const [value, setValue] = useState(props.defaultValue);

  return (
    <React.Fragment>
      <label htmlFor={`#${props.label.toLowerCase()}`} className="mt-1">
        {" "}
        {props.label}
      </label>
      <select
        className="form-select my-1"
        aria-label="Default select example"
        onChange={(e) => {
          setValue(e.target.value);
          props.onChange({
            name: props.label.toLowerCase(),
            value: e.target.value,
            selectValue: true,
          });
        }}
        value={value}
        id={props.label.toLowerCase()}
      >
        {props.options.map((option) => (
          <option key={option.text + option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default Select;
