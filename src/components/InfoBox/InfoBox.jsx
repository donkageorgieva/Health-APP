const InfoBox = (props) => {
  return (
    <div className={`alert ${props.classes}`} role="alert">
      <h4 className="alert-heading">{props.heading}</h4>
      <p>{props.info}</p>
    </div>
  );
};

export default InfoBox;
