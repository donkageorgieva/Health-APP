import React from "react";

const InfoBox = (props) => {
  const contentElements = !Array.isArray(props.heading) ? (
    <React.Fragment>
      <h4 className="alert-heading">{props.heading}</h4>
      <p>{props.info}</p>
    </React.Fragment>
  ) : (
    props.heading.map((headingInfo) => {
      return (
        <React.Fragment>
          <h4 className="alert-heading">{headingInfo.heading}</h4>
          <p>{headingInfo.info}</p>
        </React.Fragment>
      );
    })
  );
  return (
    <div className={`alert ${props.classes}`} role="alert">
      {contentElements}
    </div>
  );
};

export default InfoBox;
