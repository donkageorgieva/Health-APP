import React from "react";
import { useParams } from "react-router-dom";
import Form from "../../Form/Form";
const ConvertMain = (props) => {
  const params = useParams();

  return (
    <React.Fragment>
      <h1> {params.metric} </h1>
      <Form />
    </React.Fragment>
  );
};

export default ConvertMain;
