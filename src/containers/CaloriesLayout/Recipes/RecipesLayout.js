import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRecipes } from "../../../redux/reducers/thunks/fetchRecipes";
const Recipes = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchRecipes({
        calories: params.calories,
        health: params.health.split(" ").join("").slice(1),
      })
    );
  }, [dispatch, params.calories, params.health]);

  return <h1>Your Recipes</h1>;
};

export default Recipes;
