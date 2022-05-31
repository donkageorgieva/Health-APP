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
    console.log(recipes, "recipes");
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
                subtitle: recipe.mealType,
                lists: [
                  {
                    name: "Ingredients",
                    list: recipe.ingredientLines,
                  },
                ],
                cardTitle: recipe.label.trim(" "),
                width: "15rem",

                cardParagraph: "Calories:",
                strongLast: ` ${(
                  (recipe.calories / recipe.weight) *
                  100
                ).toFixed(2)}
                 kcal/serving `,
              };
            }
          })}
        />
      )}
    </React.Fragment>
  );
};

export default Recipes;
