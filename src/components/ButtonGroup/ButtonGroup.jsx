const ButtonGroup = (props) => {
  const buttons = props.buttons.map((button) => (
    <button type="button" class="btn btn-secondary">
      {button.text}
    </button>
  ));
  return (
    <div class="btn-group" role="group" aria-label={props.label}>
      {buttons}
    </div>
  );
};

export default ButtonGroup;
