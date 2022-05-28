import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <article className="card" style={{ width: props.width }}>
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

        <Link to={props.to.link} className="btn btn-primary">
          {props.to.name}
        </Link>
      </div>
    </article>
  );
};

export default Card;
