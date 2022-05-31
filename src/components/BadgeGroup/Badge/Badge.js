import { useState } from "react";

const Badge = (props) => {
  const [badgeClass, setBadgeClass] = useState("badge-light");
  return (
    <button
      className={`badge badge-pill ${badgeClass}`}
      onClick={(e) => {
        if (badgeClass === "badge-light") {
          setBadgeClass("badge-primary");
          props.badgeClicked(`${e.target.textContent.toLowerCase()}`);
        } else {
          setBadgeClass("badge-light");
          props.badgeClicked(`${e.target.textContent.toLowerCase()}`, true);
        }
      }}
    >
      {props.text}
    </button>
  );
};

export default Badge;
