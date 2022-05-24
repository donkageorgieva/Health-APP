import { useState } from "react";
import InputGroup from "../../components/InputGroup/InputGroup";
import Input from "../Input/Input";
const Form = (props) => {
  const [formData, setFormData] = useState(props.formData);
  const handleDataChange = (value, name) => {
    let updatedData;
    if (Array.isArray(formData)) {
      const dataIndex = formData.findIndex((data) => data.name === name);
      updatedData = [...formData];
      updatedData[dataIndex].value = value;
    } else {
      updatedData = formData;
      updatedData.value = value;
    }
    setFormData(updatedData);
    // updatedData[dataIndex].value = value;
    // setFormData(updatedData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let payload = {};
    if (Array.isArray(formData)) {
      formData.forEach((dataObj) => {
        payload[dataObj.name] = dataObj.value;
      });
    } else {
      payload = formData.value;
    }
    props.fetchFnc(payload);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {Array.isArray(props.formData) ? (
        <InputGroup
          inputData={props.formData.map((data) => {
            return {
              ...data,
              value: props.formData.find((field) => {
                return field.name === data.name;
              }).value,
              onChange: (value) => {
                handleDataChange(value, data.name);
              },
              placeholder:
                data.name.slice(0, 1).toUpperCase() + data.name.slice(1),
              label: data.name.slice(0, 1).toUpperCase() + data.name.slice(1),
            };
          })}
          selectData={props.selectData}
        />
      ) : (
        <Input
          value={props.formData.value}
          placeholder={props.formData.placeholder}
          label={props.formData.label}
          id={props.formData.name}
          valueChanged={handleDataChange}
        />
      )}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
