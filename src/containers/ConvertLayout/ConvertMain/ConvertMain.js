import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../../Form/Form";
import axios from "axios";
const ConvertMain = (props) => {
  const params = useParams();
  const [convertedValue, setConvertedValue] = useState(null);
  const [opositeMetric, setOpositeMetric] = useState("");
  const convertMetrics = (value) => {
    console.log(value, "payload");
    axios
      .get(
        `https://convert-metrics-rest-api.herokuapp.com/to-${params.metric}/${value}`
      )
      .then((response) => {
        setConvertedValue(response.data);
      })
      .catch((err) => err);
  };
  useEffect(() => {
    switch (params.metric) {
      case "kg":
        setOpositeMetric("lb");
        break;
      case "lb":
        setOpositeMetric("kg");
        break;
      case "ounce":
        setOpositeMetric("gram");
        break;
      case "gram":
        setOpositeMetric("ounce");
        break;
      default:
        setOpositeMetric("");
    }
  }, [params.metric]);
  return (
    <React.Fragment>
      <h1>
        {" "}
        {opositeMetric &&
          opositeMetric[0].toUpperCase() + opositeMetric.slice(1)}{" "}
        to {params.metric.slice(0, 1).toUpperCase() + params.metric.slice(1)}{" "}
      </h1>
      <Form
        formData={{
          name: `${params.metric}`,
          value: "",
          placeholder: opositeMetric && opositeMetric,
          label:
            opositeMetric &&
            opositeMetric[0].toUpperCase() + opositeMetric.slice(1),
        }}
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
