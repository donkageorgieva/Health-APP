import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import Form from "./containers/Form/Form";
import InfoBox from "./components/InfoBox/InfoBox";

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
      <div className="container">
        <main>
          <Form />
          {bmi ? (
            <InfoBox
              info={`Your BMI is ${bmi.value}`}
              heading={bmi.bmiRange}
              class={infoClass}
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
