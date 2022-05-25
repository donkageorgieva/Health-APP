import { fetchCalories } from "../../redux/reducers/thunks/fetchCalories";
import { useDispatch, useSelector } from "react-redux";
import Form from "../Form/Form";
import React from "react";
import InfoBox from "../../components/InfoBox/InfoBox";
const CaloriesLayout = () => {
  const dispatch = useDispatch();
  const calorieNeeds = useSelector(
    (state) => state.health.calories.calorieNeeds
  );
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
            name: "gender",
            value: "m",
            options: [
              { value: "m", text: "Male" },
              { value: "f", text: "Female" },
            ],
          },
          {
            label: "Activity",
            name: "activity",
            defaultValue: "n",
            value: "n",
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
      <InfoBox
        heading={
          calorieNeeds[0].value
            ? calorieNeeds.map((need) => {
                return {
                  heading: need.name,
                  strongFirst: need.value,
                  info: ` calories to reach your goal`,
                };
              })
            : "How to use"
        }
        info={
          !calorieNeeds[0].value &&
          "Fill in your health info and submit the form to display calorie needs. "
        }
        classes={calorieNeeds[0].value ? "alert-success" : "alert-warning"}
      />
    </React.Fragment>
  );
};

export default CaloriesLayout;
