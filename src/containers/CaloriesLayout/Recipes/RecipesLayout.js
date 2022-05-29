import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRecipes } from "../../../redux/reducers/thunks/fetchRecipes";
const Recipes = (props) => {
  const params = useParams();
  const dispatch = useDispatch();

  console.log(params);
  return <h1>Your Recipes</h1>;
};

export default Recipes;
