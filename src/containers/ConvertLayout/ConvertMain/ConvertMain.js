import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../../Form/Form";
const ConvertMain = (props) => {
  const params = useParams();

  return (
    <React.Fragment>
      <h2>
        {" "}
        Convert to{" "}
        {params.metric.slice(0, 1).toUpperCase() + params.metric.slice(1)}{" "}
      </h2>
      <Form formData={[{ name: `${params.metric}`, value: "" }]} />
    </React.Fragment>
  );
};

export default ConvertMain;
