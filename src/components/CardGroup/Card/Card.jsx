import React from "react";
import "./Card.scss";
import { Accordion } from "react-bootstrap";
const Card = (props) => {
  return (
    <article className="card border" style={{ minWidth: props.width }}>
      {props.img && (
        <img className="card-img-top" src={props.img} alt={props.img.alt} />
      )}
      <div className="card-header d-flex flex-column justify-content-sm-center justify-content-md-start  py-4">
        <h5 className="card-title">{props.cardTitle}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
      </div>
      <div className="card-body">
        <p className="card-text">
          {props.strongFirst && <strong>{props.strongFirst}</strong>}
          {props.cardParagraph}
          {props.strongLast && <strong>{props.strongLast}</strong>}
          {props.afterStrong && props.afterStrong}
        </p>

        {props.list && (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{props.listName}</Accordion.Header>
              <Accordion.Body>
                <ul class="list-group list-group-flush">
                  {props.list.map((item) => (
                    <li class="list-group-item px-0 py-2">
                      {item[0].toUpperCase() + item.split(1)}
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}
        {props.button && (
          <button onClick={props.button.onClick} className="btn btn-primary">
            {props.button.name}
          </button>
        )}
      </div>
    </article>
  );
};

export default Card;
