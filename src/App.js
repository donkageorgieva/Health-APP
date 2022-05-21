import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchBMI } from "./redux/reducers/thunks/fetchBMI";
import { Routes, Route, useLocation } from "react-router-dom";
import Form from "./containers/Form/Form";
import InfoBox from "./components/InfoBox/InfoBox";
import BMILayout from "./components/BMILayout/BMILayout";
import Header from "./components/Header/Header";
import CaloriesLayout from "./components/CaloriesLayout/CaloriesLayout";
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
        <main>
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
            <Route path="/calories" element={<CaloriesLayout />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
