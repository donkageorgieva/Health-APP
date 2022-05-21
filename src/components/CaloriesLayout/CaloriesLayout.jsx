import Form from "../../containers/Form/Form";
import React from "react";
const CaloriesLayout = () => {
  return (
    <React.Fragment>
      <h1> Calorie Needs</h1>
      <Form
        formData={[
          { name: "age", value: "", type: "number" },
          { name: "weight", value: "", type: "number" },
          { name: "height", value: "", type: "number" },
        ]}
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
