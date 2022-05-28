import { useParams } from "react-router-dom";

const Recipes = (props) => {
  const params = useParams();
  console.log(params.maxCalories);
  return <h1>Your Recipes</h1>;
};

export default Recipes;
