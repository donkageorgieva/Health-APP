const InfoBox = (props) => {
  return (
    <div className={`alert ${props.class}`} role="alert">
      <h4 class="alert-heading">{props.heading}</h4>
      <p>{props.info}</p>
    </div>
  );
};

export default InfoBox;
