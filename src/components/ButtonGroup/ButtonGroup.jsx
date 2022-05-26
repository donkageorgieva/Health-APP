import { NavLink } from "react-router-dom";

const ButtonGroup = (props) => {
  const buttons = props.buttons.map((button) => (
    <NavLink
      type="button"
      className="btn btn-secondary my-2"
      to={button.to}
      key={button.text}
    >
      {button.text}
    </NavLink>
  ));
  return (
    <div class="btn-group  btn-group-md" role="group" aria-label={props.label}>
      {buttons}
    </div>
  );
};

export default ButtonGroup;
