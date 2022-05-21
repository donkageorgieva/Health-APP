import React from "react";
import Form from "../../containers/Form/Form";
import InfoBox from "../InfoBox/InfoBox";
const BMILayout = (props) => {
  return (
    <React.Fragment>
      <h1> BMI</h1>
      <Form
        fetchFnc={props.fetchBMI}
        formData={[
          { name: "age", value: "", type: "number" },
          { name: "weight", value: "", type: "number" },
          { name: "height", value: "", type: "number" },
        ]}
      />
      {props.bmi ? (
        <InfoBox
          info={`Your BMI range is ${props.bmi.bmiRange}`}
          heading={props.bmi.value}
          classes={props.infoClass}
        />
      ) : (
        <h1>Loading .. </h1>
      )}
    </React.Fragment>
  );
};

export default BMILayout;
