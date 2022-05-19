import { useState } from "react";
import { useDispatch } from "react-redux";
import InputGroup from "../../components/InputGroup/InputGroup";
const Form = (props) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    "age": "",
    "weight": "",
    "height": "",
    resetForm: false,
  });
  const handleDataChange = (data) => {
    setFormData({
      ...formData,
      [data.dataType]: data.value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      props.fetchFnc({
        weight: parseFloat(formData.weight),
        height: parseFloat(formData.height),
      })
    );
    const clearedFormData = {};
    for (const key in formData) {
      clearedFormData[key] = "";
    }
    setFormData(clearedFormData);
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
            value: formData["age"],
          },
          {
            id: 2,
            label: "Weight in Kg",
            placeholder: "Weight",
            onChange: (value) => {
              handleDataChange({ value, dataType: "weight" });
            },
            value: formData["weight"],
          },
          {
            id: 3,
            label: "Height (CM) ",
            placeholder: "Height",
            onChange: (value) => {
              handleDataChange({ value, dataType: "height" });
            },
            value: formData["height"],
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
