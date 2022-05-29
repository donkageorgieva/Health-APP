import { useParams } from "react-router-dom";

const Recipes = (props) => {
  const params = useParams();
  console.log(params.calories / 5, "calories");
  return <h1>Your Recipes</h1>;
};

export default Recipes;
