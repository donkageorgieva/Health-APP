import React from "react";

const InfoBox = (props) => {
  const contentElements = !Array.isArray(props.heading) ? (
    <React.Fragment>
      <h4 className="alert-heading">{props.heading}</h4>
      <p>
        {props.strongFirst && <strong>{props.strongFirst}</strong>}
        {props.info} {props.strongLast && <strong>{props.strongLast}</strong>}
      </p>
    </React.Fragment>
  ) : (
    props.heading.map((headingInfo) => {
      return (
        <React.Fragment>
          <h4 className="alert-heading">{headingInfo.heading}</h4>
          <p>
            {headingInfo.strongFirst && (
              <strong>{headingInfo.strongFirst}</strong>
            )}
            {headingInfo.info}{" "}
            {props.strongLast && <strong>{props.strongLast}</strong>}
          </p>
        </React.Fragment>
      );
    })
  );
  return (
    <div className={`alert my-2 ${props.classes}`} role="alert">
      {contentElements}
    </div>
  );
};

export default InfoBox;
