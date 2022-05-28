import React from "react";
import { Routes, Route } from "react-router-dom";
import BMILayout from "./containers/BMILayout/BMILayout";
import Header from "./components/Header/Header";
import CaloriesLayout from "./containers/CaloriesLayout/CaloriesLayout";
import ConvertLayout from "./containers/ConvertLayout/ConvertLayout";
import "./App.scss";
import ConvertMain from "./containers/ConvertLayout/ConvertMain/ConvertMain";
import Recipes from "./containers/CaloriesLayout/Recipes/RecipesLayout";

function App() {
  return (
    <div className="App">
      <Header
        navLinks={[
          { name: "BMI Calculator", to: "/" },
          { name: "Calorie Calculator", to: "/calories" },
          { name: "Conversion Calculator", to: "/convert" },
        ]}
      />
      <div className="container">
        <main className="pt-5">
          <Routes>
            <Route path="/" element={<BMILayout />} />
            <Route path="calories" element={<CaloriesLayout />} />
            <Route path="calories/recipes/:maxCalories" element={<Recipes />} />

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
