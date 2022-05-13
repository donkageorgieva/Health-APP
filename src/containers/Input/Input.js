import { useState } from "react";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");
  const handleValueChange = (val) => {
    setInputValue(val);
    props.valueChanged(val);
  };
  return (
    <input
      className="form-control"
      id={props.id}
      aria-describedby={props.describe}
      placeholder={props.placeholder}
      value={inputValue}
      onChange={(e) => {
        handleValueChange(e.target.value);
      }}
    />
  );
};

export default Input;
