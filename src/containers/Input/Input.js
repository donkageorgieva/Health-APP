const Input = (props) => {
  const handleValueChange = (val) => {
    props.valueChanged(val);
  };

  return (
    <input
      className="form-control"
      id={props.id}
      aria-describedby={props.describe}
      placeholder={props.placeholder}
      value={props.value}
      type={props.type}
      onChange={(e) => {
        handleValueChange(e.target.value);
      }}
    />
  );
};

export default Input;
