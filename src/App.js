import Axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBMI } from "./redux/reducers/health-status-reducer";
import "./App.scss";
import Form from "./containers/Form/Form";

function App() {
  const dispatch = useDispatch();

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
    // const fetchData = async () => {
    //   try {
    //     const response = await Axios.post("http://localhost:8080/bmi");
    //     if (response.data) {
    //       console.log(response.data);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchData();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <main>
          <Form />
        </main>
      </div>
    </div>
  );
}

export default App;
