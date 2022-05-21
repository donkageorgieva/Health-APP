import React from "react";
import Input from "../../containers/Input/Input";

const InputGroup = (props) => {
  console.log(props.inputData);
  const inputElements = props.inputData.map((data) => {
    return (
      <div className="form-group" key={data.id}>
        <label htmlFor={data.id}>{data.label}</label>
        <Input
          valueChanged={data.onChange}
          id={data.id}
          aria-describedby={data.describe}
          placeholder={data.placeholder}
          describe="Age"
          value={data.value}
          type={data.type}
        />
      </div>
    );
  });
  return <div>{inputElements}</div>;
};

export default InputGroup;
