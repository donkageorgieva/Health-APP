import { useState } from "react";
import InputGroup from "../../components/InputGroup/InputGroup";
import Input from "../Input/Input";
const Form = (props) => {
  const [formData, setFormData] = useState({
    inputData: props.formData,
    selectData: props.selectData && props.selectData,
  });
  const handleDataChange = (value, name) => {
    let updatedData;
    if (!value.selectValue) {
      if (Array.isArray(formData.inputData)) {
        const dataIndex = formData.inputData.findIndex(
          (data) => data.name === name
        );
        updatedData = [...formData.inputData];
        if (dataIndex >= 0) {
          updatedData[dataIndex].value = value;
        } else {
          updatedData.push(value);
        }
      } else {
        updatedData = formData.inputData;
        updatedData.value = value;
      }
      setFormData({
        ...formData,
        inputData: updatedData,
      });
    } else {
      const dataIndex = formData.selectData.findIndex(
        (data) => data.name === value.name
      );
      const updatedData = [...formData.selectData];
      updatedData[dataIndex].value = value.value;
      setFormData({
        ...formData,
        selectData: updatedData,
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let payload = {};
    if (!formData.selectData) {
      if (Array.isArray(formData.inputData)) {
        formData.inputData.forEach((dataObj) => {
          payload[dataObj.name] = dataObj.value;
        });
      } else {
        payload = formData.inputData.value;
      }
    } else {
      formData.inputData.forEach((dataObj) => {
        payload[dataObj.name] = dataObj.value;
      });
      formData.selectData.forEach((dataObj) => {
        payload[dataObj.name] = dataObj.value;
      });
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
          onChangeSelect={handleDataChange}
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

      <button type="submit" className="btn btn-primary my-4">
        Submit
      </button>
      {props.infoButton && (
        <button type="button" className="btn btn-secondary my-4">
          {props.infoButton.text}
        </button>
      )}
    </form>
  );
};

export default Form;
