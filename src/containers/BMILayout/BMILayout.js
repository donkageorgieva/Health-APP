import React from "react";
import Form from "../Form/Form";
import InfoBox from "../../components/InfoBox/InfoBox";
import Spinner from "../../components/Spinner/Spinner";
import { fetchBMI } from "../../redux/reducers/thunks/fetchBMI";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
const BMILayout = (props) => {
  const bmi = useSelector((state) => state.health.bmi);
  const [infoClass, setInfoClass] = useState("alert-warning");
  const dispatch = useDispatch();
  const handleFetchBMI = (payload) => {
    dispatch(fetchBMI(payload));
  };
  useEffect(() => {
    if (bmi.bmiRange.length > 0) {
      if (bmi.bmiRange === "healthy") {
        setInfoClass("alert-success");
      } else if (bmi.bmiRange !== "healthy" && bmi.bmiRange.trim().length > 0) {
        setInfoClass("alert-danger");
      }
    }
  }, [bmi]);
  return (
    <React.Fragment>
      <h1> BMI</h1>
      <Form
        fetchFnc={handleFetchBMI}
        formData={[
          { name: "age", value: "", type: "number" },
          { name: "weight", value: "", type: "number" },
          { name: "height", value: "", type: "number" },
        ]}
      />
      {!bmi.isLoading ? (
        bmi.bmiRange.length > 0 ? (
          <InfoBox
            info={`Your BMI range is `}
            strongLast={bmi.bmiRange}
            heading={bmi.value}
            classes={infoClass}
          />
        ) : (
          <InfoBox
            info={`Enter your information and submit the form.`}
            heading={"How to use"}
            classes={infoClass}
          />
        )
      ) : (
        <Spinner />
      )}
    </React.Fragment>
  );
};

export default BMILayout;
