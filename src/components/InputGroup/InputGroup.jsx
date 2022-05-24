import React from "react";
import Input from "../../containers/Input/Input";
import Select from "../../containers/Select/Select";
const InputGroup = (props) => {
  const inputElements = props.inputData.map((data) => {
    return (
      <div className="form-group" key={data.id + data.name}>
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
  const selectElements =
    props.selectData &&
    props.selectData.map((data) => (
      <Select
        options={data.options}
        label={data.label}
        key={data.label + data.options.length}
        onChange={props.onChangeSelect}
      />
    ));
  return (
    <div>
      {inputElements} {props.selectData && selectElements}
    </div>
  );
};

export default InputGroup;
