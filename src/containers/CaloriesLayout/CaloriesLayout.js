import { fetchCalories } from "../../redux/reducers/thunks/fetchCalories";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../containers/Modal/Modal";
import Form from "../Form/Form";
import React from "react";
import InfoBox from "../../components/InfoBox/InfoBox";
import CardGroup from "../../components/CardGroup/CardGroup";
import Spinner from "../../components/Spinner/Spinner";
const CaloriesLayout = () => {
  const dispatch = useDispatch();
  const calorieNeeds = useSelector(
    (state) => state.health.calories.calorieNeeds
  );
  const calories = useSelector((state) => state.health.calories);
  const [modalConfig, setModalConfig] = useState({
    show: false,
    base: "/recipes/",
    optional: " ",
    title: "Diet Preferences",
    name: "Show Recipes",
  });
  const handleFetchCalories = (info) => {
    dispatch(fetchCalories(info));
  };
  const handleShowRecipes = (val, shouldRemove = false) => {
    let newString = modalConfig.optional.trim(" ").split("&");

    newString = newString.filter((str) => str !== val);

    if (!shouldRemove) {
      newString.push(val.trim(" "));
    }

    newString = newString.map((str, index) => {
      if (index !== 0) {
        return (str = `&${str.trim(" ")}`);
      } else {
        return "";
      }
    });

    setModalConfig({
      ...modalConfig,
      optional: newString.join("").trim(" "),
    });
  };
  return (
    <React.Fragment>
      <h1 className="pb-2"> Calorie Needs</h1>
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
      {!calories.isLoading ? (
        calorieNeeds[0].value ? (
          <CardGroup
            cards={calorieNeeds.map((need) => {
              return {
                cardTitle: need.name,
                id: need.id,
                button: {
                  name: `Recipes`,

                  onClick: () => {
                    setModalConfig({
                      ...modalConfig,
                      show: !modalConfig.show,
                      base: `recipes/${need.value}/`,
                      optional: ` `,
                    });
                  },
                },
                cardParagraph: `You need to eat `,
                strongLast: need.value,
                afterStrong: ` calories a day to reach your goal.`,
              };
            })}
            width="15rem"
          />
        ) : (
          <InfoBox
            heading="How to use"
            info="Fill in your health info and submit the form to display calorie needs. "
            classes="alert-warning"
          />
        )
      ) : (
        <Spinner />
      )}

      {modalConfig.show && (
        <Modal
          title={modalConfig.title}
          to={{
            link: modalConfig.base + modalConfig.optional.slice(1),
            name: modalConfig.name,
          }}
          close={(e) => {
            setModalConfig({ ...modalConfig, show: false });
          }}
          body="Select any dietary preferences"
          badges={[
            {
              onClick: handleShowRecipes,
              text: "Vegan",
            },
            {
              onClick: handleShowRecipes,
              text: "Vegetarian",
            },
            {
              onClick: handleShowRecipes,
              text: "Pescatarian",
            },
          ]}
        />
      )}
    </React.Fragment>
  );
};

export default CaloriesLayout;
