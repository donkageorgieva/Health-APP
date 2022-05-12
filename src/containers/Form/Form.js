import { useState } from "react";
import InputGroup from "../../components/InputGroup/InputGroup";
const Form = () => {
  const [formData, setFormData] = useState({
    "age": null,
    "weight": null,
    "height": null,
  });
  const handleDataChange = (data) => {
    setFormData({
      ...formData,
      [data.dataType]: data.value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // const clearedFormData = {};
    // for (const key in formData) {
    //   clearedFormData[key] = null;
    // }
    // setFormData(clearedFormData);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <InputGroup
        inputData={[
          {
            id: 1,
            label: "Age",
            placeholder: "Age",
            onChange: (value) => {
              handleDataChange({ value, dataType: "age" });
            },
          },
          {
            id: 2,
            label: "Weight in Kg",
            placeholder: "Weight",
            onChange: (value) => {
              handleDataChange({ value, dataType: "weight" });
            },
          },
          {
            id: 3,
            label: "Height in Meters",
            placeholder: "Height",
            onChange: (value) => {
              handleDataChange({ value, dataType: "height" });
            },
          },
        ]}
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
