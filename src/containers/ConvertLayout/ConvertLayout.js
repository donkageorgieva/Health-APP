import { Outlet, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";

const ConvertLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("lb");
  }, []);
  return (
    <React.Fragment>
      <h1>Convert Metrics</h1>
      <ButtonGroup
        buttons={[
          { text: "Kg to Lb", to: "lb" },
          { text: "Lb to Kg", to: "kg" },
          { text: "Ounce to Gram", to: "gram" },
          { text: "Gram to Ounce", to: "ounce" },
        ]}
      />
      <Outlet />
    </React.Fragment>
  );
};

export default ConvertLayout;
