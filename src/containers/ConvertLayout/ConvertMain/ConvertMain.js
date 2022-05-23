import { useParams } from "react-router-dom";
import Form from "../../Form/Form";
const ConvertMain = (props) => {
  const params = useParams();

  return <h1> {params.metric} </h1>;
};

export default ConvertMain;
