import React from "react";
import { Link } from "react-router-dom";
import BadgeGroup from "../../components/BadgeGroup/BadgeGroup";

const Modal = (props) => {
  return (
    <React.Fragment>
      <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="recipeModal"
      >
        <div className="backdrop" onClick={props.close}></div>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.title}</h5>
              <button
                type="button"
                className="close "
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.close}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{props.body}</p>
              {props.badges && <BadgeGroup badges={props.badges} />}
            </div>
            <div className="modal-footer">
              <Link to={props.to.link} className="btn btn-primary">
                {props.to.name}
              </Link>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={props.close}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
