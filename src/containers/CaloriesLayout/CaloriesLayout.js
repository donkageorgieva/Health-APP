import { fetchCalories } from "../../redux/reducers/thunks/fetchCalories";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal";
import Form from "../Form/Form";
import React from "react";
// import InfoBox from "../../components/InfoBox/InfoBox";
import CardGroup from "../../components/CardGroup/CardGroup";
const CaloriesLayout = () => {
  const dispatch = useDispatch();
  const calorieNeeds = useSelector(
    (state) => state.health.calories.calorieNeeds
  );
  const [modalConfig, setModalConfig] = useState({
    show: false,
    link: "/helo",
    title: "Recipes",
    name: "",
    btnDisabled: true,
  });
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
      {calorieNeeds[0].value && (
        <CardGroup
          cards={calorieNeeds.map((need) => {
            return {
              cardTitle: need.name,
              id: need.id,
              button: {
                name: `Recipes`,
                onClick: (e) => {
                  setModalConfig({
                    ...modalConfig,
                    show: !modalConfig.show,
                    link: `recipes/${need.value}`,
                    btnDisabled: true,
                  });
                },
              },
              cardParagraph: `You need to eat `,
              strongLast: need.value,
              afterStrong: ` calories a day to reach your goal.`,
            };
          })}
          width="15rem"
          // info={
          //   !calorieNeeds[0].value &&
          //   "Fill in your health info and submit the form to display calorie needs. "
          // }
          // classes={calorieNeeds[0].value ? "alert-success" : "alert-warning"}
        />
      )}
      {modalConfig.show && (
        <Modal
          title={modalConfig.title}
          to={{ link: modalConfig.link, name: modalConfig.name }}
          close={(e) => {
            setModalConfig({ ...modalConfig, show: false });
          }}
        />
      )}
    </React.Fragment>
  );
};

export default CaloriesLayout;
