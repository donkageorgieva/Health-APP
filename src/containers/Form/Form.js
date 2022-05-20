import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import InputGroup from "../../components/InputGroup/InputGroup";
const Form = (props) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(props.formData);

  const handleDataChange = (value, name) => {
    const dataIndex = formData.findIndex((data) => data.name === name);
    console.log(formData[dataIndex]);
    const updatedData = [...formData];
    updatedData[dataIndex].value = value;
    setFormData(updatedData);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // dispatch(
    //   props.fetchFnc({
    //     weight: parseFloat(formData.weight),
    //     height: parseFloat(formData.height),
    //   })
    // );
    // const clearedFormData = [];
    // for (const key in formData) {
    //   clearedFormData[key] = "";
    // }
    setFormData([]);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <InputGroup
        inputData={props.formData.map((data) => {
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
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
