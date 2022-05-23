import { Link } from "react-router-dom";

const ButtonGroup = (props) => {
  const buttons = props.buttons.map((button) => (
    <Link
      type="button"
      className="btn btn-secondary"
      to={button.to}
      key={button.text}
    >
      {button.text}
    </Link>
  ));
  return (
    <div class="btn-group  btn-group-md" role="group" aria-label={props.label}>
      {buttons}
    </div>
  );
};

export default ButtonGroup;
