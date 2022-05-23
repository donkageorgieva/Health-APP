import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchBMI } from "./redux/reducers/thunks/fetchBMI";
import { Routes, Route } from "react-router-dom";
import BMILayout from "./components/BMILayout/BMILayout";
import Header from "./components/Header/Header";
import CaloriesLayout from "./components/CaloriesLayout/CaloriesLayout";
import ConvertLayout from "./components/ConvertLayout/ConvertLayout";
import "./App.scss";

function App() {
  const bmi = useSelector((state) => state.health.bmi);
  const [infoClass, setInfoClass] = useState("");

  useEffect(() => {
    if (bmi.bmiRange === "healthy") {
      setInfoClass("alert-success");
    } else if (bmi.bmiRange !== "healthy" && bmi.bmiRange.trim().length > 0) {
      setInfoClass("alert-danger");
    } else {
      setInfoClass("");
    }
  }, [bmi]);

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
            <Route
              path="/"
              element={
                <BMILayout
                  bmi={bmi}
                  infoClass={infoClass}
                  fetchBMI={fetchBMI}
                />
              }
            />
            <Route path="calories" element={<CaloriesLayout />} />
            <Route path="convert" element={<ConvertLayout />}>
              <Route path=":to" element={<h1>Hi</h1>} />
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
