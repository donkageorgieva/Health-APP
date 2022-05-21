import { useState } from "react";

const Select = (props) => {
  const [value, setValue] = useState(props.defaultValue);
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={(e) => {
        setValue(e.target.value);
        console.log(value);
      }}
      value={value}
    >
      {props.options.map((option) => (
        <option key={option.text + option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
