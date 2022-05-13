import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBMI } from "./redux/reducers/health-status-reducer";
import "./App.scss";
import Form from "./containers/Form/Form";
import InfoBox from "./components/InfoBox/InfoBox";

function App() {
  const dispatch = useDispatch();
  const bmi = useSelector((state) => state.health.bmi.value);
  useEffect(() => {
    dispatch(
      fetchBMI({
        weight: 60,
        height: 1.85,
        age: 25,
        activityFactor: "n",
        gender: "m",
      })
    );
  }, [dispatch]);
  return (
    <div className="App">
      <div className="container">
        <main>
          <Form />
          {bmi ? <InfoBox info={bmi} /> : <h1>Loading .. </h1>}
        </main>
      </div>
    </div>
  );
}

export default App;
