import { useEffect } from "react";
import "./App.scss";
import Form from "./containers/Form/Form";
function App() {
  useEffect(() => {
    fetch("http://localhost:8080/bmi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        weight: 80,
        height: 1.85,
        age: 25,
        activityFactor: "n",
        gender: "m",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
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
