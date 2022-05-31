import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchRecipes } from "../../../redux/reducers/thunks/fetchRecipes";
import CardGroup from "../../../components/CardGroup/CardGroup";
const Recipes = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.health.nutrition.recipes);

  useEffect(() => {
    dispatch(
      fetchRecipes({
        calories: params.calories,
        health: params.health,
      })
    );
  }, [dispatch, params.calories, params.health]);

  return (
    <React.Fragment>
      <h1 className="text-center py-5">Your Recipes</h1>
      {recipes && (
        <CardGroup
          cards={recipes.map((recipe) => {
            if (recipe !== undefined) {
              return {
                img: recipe.image,
                subtitle:
                  ((recipe.calories / recipe.weight) * 100).toFixed(2) +
                  ` kcal per serving (${recipe.mealType})`,
                list: recipe.ingredientLines,
                cardTitle: recipe.label,
                width: "15rem",
                listName: "Ingredients",
              };
            }
          })}
        />
      )}
    </React.Fragment>
  );
};

export default Recipes;
