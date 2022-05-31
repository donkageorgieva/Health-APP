import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import BMILayout from "./containers/BMILayout/BMILayout";
import CaloriesLayout from "./containers/CaloriesLayout/CaloriesLayout";
import ConvertLayout from "./containers/ConvertLayout/ConvertLayout";
import "./App.scss";
import ConvertMain from "./containers/ConvertLayout/ConvertMain/ConvertMain";
import Recipes from "./containers/CaloriesLayout/Recipes/Recipes";
import Nav from "./containers/Nav/Nav";
import RecipesLayout from "./containers/CaloriesLayout/RecipesLayout.js/RecipesLayout";

function App() {
  const calories = useSelector((state) => state.health.calories.calorieNeeds);
  return (
    <div className="App">
      <Nav
        navLinks={[
          { name: "BMI Calculator", to: "/" },
          { name: "Calorie Calculator", to: "/calories" },
          {
            name: "Recipes",
            to: `${
              !calories[0].value
                ? "/calories/recipes/"
                : `/calories/recipes/${calories[2].value}/pescatarian&vegan&vegetarian`
            }`,
          },
          { name: "Conversion Calculator", to: "/convert" },
        ]}
      />
      <div className="container">
        <main className="py-5 my-2">
          <Routes>
            <Route index element={<BMILayout />} />
            <Route path="calories" element={<CaloriesLayout />} />
            <Route path="/calories/recipes/" element={<RecipesLayout />}>
              <Route path=":calories/:health" element={<Recipes />} />
            </Route>

            <Route path="convert" element={<ConvertLayout />}>
              <Route path=":metric" element={<ConvertMain />} />
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
