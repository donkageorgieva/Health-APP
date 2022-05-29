const Badge = (props) => {
  return (
    <button
      className={`badge badge-pill  ${props.badgeColorClass}`}
      onClick={props.badgeClicked}
    >
      {props.text}
    </button>
  );
};

export default Badge;
