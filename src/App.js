import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchBMI } from "./redux/reducers/thunks/fetchBMI";
import { Routes, Route } from "react-router-dom";
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
                    inputData={[
                      {
                        id: 1,
                        name: "age",
                        label: "Age",
                        placeholder: "Age",

                        // value: formData["age"],
                      },
                      {
                        id: 2,
                        name: "weight",
                        label: "Weight in Kg",
                        placeholder: "Weight",

                        // value: formData["weight"],
                      },
                      {
                        id: 3,
                        label: "Height (CM) ",
                        placeholder: "Height",
                        name: "height",
                        // value: formData["height"],
                      },
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
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
