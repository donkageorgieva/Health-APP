import React, { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const RecipesLayout = (props) => {
  const params = useParams();

  return (
    <React.Fragment>
      <h1 className="text-center py-5">Your Recipes</h1>
      {!params.calories && (
        <Link to="/calories" className="btn btn-primary">
          {" "}
          Add your calories to view recipes{" "}
        </Link>
      )}
      <Outlet />
    </React.Fragment>
  );
};

export default RecipesLayout;
