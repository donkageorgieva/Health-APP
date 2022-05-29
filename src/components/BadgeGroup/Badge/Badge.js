import { useState } from "react";

const Badge = (props) => {
  const [badgeClass, setBadgeClass] = useState("badge-light");
  return (
    <button
      className={`badge badge-pill ${badgeClass}`}
      onClick={(e) => {
        props.badgeClicked(e.target.textContent.toLowerCase());
        if (badgeClass === "badge-light") {
          setBadgeClass("badge-primary");
        } else {
          setBadgeClass("badge-light");
        }
      }}
    >
      {props.text}
    </button>
  );
};

export default Badge;
