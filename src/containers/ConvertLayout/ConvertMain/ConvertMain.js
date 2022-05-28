import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoBox from "../../../components/InfoBox/InfoBox";
import Form from "../../Form/Form";
import axios from "axios";
const ConvertMain = (props) => {
  const params = useParams();
  const [convertedValue, setConvertedValue] = useState(null);
  const [opositeMetric, setOpositeMetric] = useState("");
  const convertMetrics = (value) => {
    axios
      .get(
        `https://convert-metrics-rest-api.herokuapp.com/to-${params.metric}/${value}`
      )
      .then((response) => {
        setConvertedValue(response.data);
        console.log(convertedValue, "convrted");
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

      <InfoBox
        heading={
          !convertedValue || !convertedValue[`${params.metric}s`]
            ? "How to use"
            : convertedValue[`${params.metric}s`] + ` ${params.metric}s`
        }
        info={
          !convertedValue || !convertedValue[`${params.metric}s`]
            ? `Provide your value in ${opositeMetric}s and submit the form to display the value in ${params.metric}s.`
            : "Result"
        }
        classes={
          convertedValue && convertedValue[`${params.metric}s`]
            ? "alert-success"
            : "alert-warning"
        }
      />
    </React.Fragment>
  );
};

export default ConvertMain;
