import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchBMI } from "./redux/reducers/thunks/fetchBMI";
import { Routes, Route, useLocation } from "react-router-dom";
import Form from "./containers/Form/Form";
import InfoBox from "./components/InfoBox/InfoBox";
import Header from "./components/Header/Header";
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
          { name: "Measurments Calculator", to: "/convert" },
        ]}
      />
      <div className="container">
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  <Form
                    fetchFnc={fetchBMI}
                    formData={[
                      { name: "age", value: null, type: "number" },
                      { name: "weight", value: null, type: "number" },
                      { name: "height", value: null, type: "number" },
                    ]}
                  />
                  {bmi ? (
                    <InfoBox
                      info={`Your BMI range is ${bmi.bmiRange}`}
                      heading={bmi.value}
                      classes={infoClass}
                    />
                  ) : (
                    <h1>Loading .. </h1>
                  )}
                </React.Fragment>
              }
            />
            <Route
              path="/calories"
              element={
                <React.Fragment>
                  <h1>Calories</h1>
                  <Form
                    formData={[
                      { name: "age", value: "", pattern: "[0-9]*" },
                      { name: "weight", value: "", pattern: "[0-9]*" },
                      { name: "height", value: "", pattern: "[0-9]*" },
                      { name: "gender", value: "", option: true },
                      { name: "activity", value: "", option: true },
                    ]}
                  />
                </React.Fragment>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
