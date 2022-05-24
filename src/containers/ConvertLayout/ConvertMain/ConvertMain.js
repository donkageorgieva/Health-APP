import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../../Form/Form";
import axios from "axios";
const ConvertMain = (props) => {
  const params = useParams();
  const [convertedValue, setConvertedValue] = useState(null);
  const convertMetrics = (value) => {
    console.log(value, "payload");
    axios
      .get(
        `https://convert-metrics-rest-api.herokuapp.com/to-${params.metric}/${value}`
      )
      .then((response) => {
        setConvertedValue(response.data);
        console.log(convertedValue, "CONVERTED");
      })
      .catch((err) => err);
  };
  return (
    <React.Fragment>
      <h2>
        {" "}
        Convert to{" "}
        {params.metric.slice(0, 1).toUpperCase() + params.metric.slice(1)}{" "}
      </h2>
      <Form
        formData={{ name: `${params.metric}`, value: "" }}
        fetchFnc={convertMetrics}
      />
      {convertedValue ? (
        <h1>{convertedValue[params.metric + "s"]}</h1>
      ) : (
        <h1>Please enter a value</h1>
      )}
    </React.Fragment>
  );
};

export default ConvertMain;
