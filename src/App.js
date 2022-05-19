import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchBMI } from "./redux/reducers/thunks/fetchBMI";
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
          { name: "BMI Calculator", to: "/bmi" },
          { name: "Calorie Calculator", to: "/calories" },
          { name: "Measurments Calculator", to: "/convert" },
        ]}
      />
      <div className="container">
        <main>
          <Form fetchFnc={fetchBMI} />
          {bmi ? (
            <InfoBox
              info={`Your BMI range is ${bmi.bmiRange}`}
              heading={bmi.value}
              classes={infoClass}
            />
          ) : (
            <h1>Loading .. </h1>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
