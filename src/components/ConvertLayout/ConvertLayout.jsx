import { Outlet } from "react-router-dom";
import React from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

const ConvertLayout = () => {
  return (
    <React.Fragment>
      <h1>Convert</h1>
      <ButtonGroup
        buttons={[
          { text: "Kg to Lb", to: "to-lb" },
          { text: "Lb to Kg", to: "to-kg" },
          { text: "Ounce to Gram", to: "to-gram" },
          { text: "Gram to Ounce", to: "to-ounce" },
        ]}
      />
      <Outlet />
    </React.Fragment>
  );
};

export default ConvertLayout;
