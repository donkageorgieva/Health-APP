import React from "react";
import Form from "../Form/Form";
import InfoBox from "../../components/InfoBox/InfoBox";
import { fetchBMI } from "../../redux/reducers/thunks/fetchBMI";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
const BMILayout = (props) => {
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
    <React.Fragment>
      <h1> BMI</h1>
      <Form
        fetchFnc={fetchBMI}
        formData={[
          { name: "age", value: "", type: "number" },
          { name: "weight", value: "", type: "number" },
          { name: "height", value: "", type: "number" },
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
  );
};

export default BMILayout;
