import Form from "../Form/Form";
import React from "react";
import { fetchCalories } from "../../redux/reducers/thunks/fetchCalories";
import { useDispatch } from "react-redux";
const CaloriesLayout = () => {
  const dispatch = useDispatch();
  const handleFetchCalories = (info) => {
    dispatch(fetchCalories(info));
  };
  return (
    <React.Fragment>
      <h1> Calorie Needs</h1>
      <Form
        formData={[
          { name: "age", value: "", type: "number" },
          { name: "weight", value: "", type: "number" },
          { name: "height", value: "", type: "number" },
        ]}
        fetchFnc={handleFetchCalories}
        selectData={[
          {
            defaultValue: "m",
            label: "Gender",
            options: [
              { value: "m", text: "Male" },
              { value: "f", text: "Female" },
            ],
          },
          {
            label: "Activity",
            defaultValue: "n",
            options: [
              { value: "n", text: "Sedentary" },
              { value: "s", text: "Lightly Active" },
              { value: "m", text: "Moderately Active" },
              { value: "l", text: "Very Active" },
              { value: "x", text: "Extra Active" },
            ],
          },
        ]}
      />
    </React.Fragment>
  );
};

export default CaloriesLayout;
