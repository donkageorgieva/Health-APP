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
                  {
                    name: "Nutrients",
                    list: recipe.nutrients.map(
                      (nutrient) =>
                        `${nutrient.label}: ${nutrient.quantity.toFixed(2)}g`
                    ),
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
