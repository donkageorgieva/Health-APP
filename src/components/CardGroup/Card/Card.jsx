const Card = (props) => {
  return (
    <article className="card border" style={{ width: props.width }}>
      {props.img && (
        <img className="card-img-top" src={props.img.src} alt={props.img.alt} />
      )}
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">
          {props.strongFirst && <strong>{props.strongFirst}</strong>}
          {props.cardParagraph}
          {props.strongLast && <strong>{props.strongLast}</strong>}
          {props.afterStrong && props.afterStrong}
        </p>

        {props.button && <button onClick={props.button.onClick} className="btn btn-primary">
          {props.button.name}
        </button>}
      </div>
    </article>
  );
};

export default Card;
