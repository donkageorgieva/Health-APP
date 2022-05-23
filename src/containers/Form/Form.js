import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import InputGroup from "../../components/InputGroup/InputGroup";
const Form = (props) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(props.formData);
  console.log(props.formData, "FORM DATA");
  const handleDataChange = (value, name) => {
    const dataIndex = formData.findIndex((data) => data.name === name);
    const updatedData = [...formData];
    updatedData[dataIndex].value = value;
    setFormData(updatedData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "submit");
    const payload = {};
    formData.forEach((dataObj) => {
      payload[dataObj.name] = dataObj.value;
    });
    console.log(payload);
    dispatch(props.fetchFnc(payload));
    // const clearedFormData = [];
    // for (const key in formData) {
    //   clearedFormData[key] = "";
    // }
    // setFormData([]);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {
        <InputGroup
          inputData={formData.map((data) => {
            return {
              ...data,
              value: formData.find((field) => {
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
      }

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
