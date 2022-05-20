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
    } else {
      setInfoClass("alert-danger");
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
                      { name: "age", value: "" },
                      { name: "weight", value: "" },
                      { name: "height", value: "" },
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
                      { name: "age", value: "" },
                      { name: "weight", value: "" },
                      { name: "height", value: "" },
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
